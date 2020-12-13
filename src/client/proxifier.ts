import { Client, AllOptions, AllProxies } from '@/types/client';
import { ProxifierRender } from '@/config/proxifier'
import { Render } from '@/types/config';
import {
    BuiltinReplacement, DirectSymbol, RejectSymbol, getProxyName, Proxy,
} from '@/utils/builtin'
import * as r from '@/types/rules'
import { parseCidr } from '@/utils/ip'


function ipRange(it: r.RuleIPRange): string {
    const parsed = parseCidr(it.ip, it.prefix)

    return `${parsed.begin} - ${parsed.end}`
}
export class ProxifierClient implements Client {
    static replacement: BuiltinReplacement = {
        [DirectSymbol]: 'Direct',
        [RejectSymbol]: 'Block',
    }

    private id = 100

    private proxiesIdCache: Map<string, number> = new Map()

    supportKeyword(keyword: AllOptions): boolean {
        return [
            'DOMAIN',
            'DOMAIN_KEYWORD',
            'DOMAIN_SUFFIX',
            'PROCESS_NAME',
            'IP_RANGE',
            'FINAL',
        ].includes(keyword.type)
    }

    supportProxy(proxy: AllProxies): boolean {
        return [
            'socks5',
        ].includes(proxy.type)
    }

    makeRule(name: string, extra: string): string {
        return `<Rule enabled="true">
            <Name>${name}</Name>
            ${extra}
        </Rule>`
    }

    private makeAction(proxy: Proxy): string {
        const type = getProxyName(proxy, ProxifierClient.replacement)

        if (typeof proxy !== 'string') {
            return `<Action type="${type}" />`
        }

        return `<Action type="Proxy">${this.proxiesIdCache.get(proxy)}</Action>`
    }
    public readonly renderType = 'multi'
    renderRules(options: AllOptions[]): string[] {
        const result: string[] = []

        const ruleGroup: {
            [key: string]: AllOptions[]
        } = {}

        options.forEach(it => {
            const keyName = `${it.type}-${getProxyName(it.proxy, ProxifierClient.replacement)}`

            if (ruleGroup[keyName]) {
                ruleGroup[keyName].push(it)
            } else {
                ruleGroup[keyName] = [it]
            }
        })

        for (const [name, rs] of Object.entries(ruleGroup)) {
            const [ruleItem] = rs
            const typeName = ruleItem.type

            switch (typeName) {
                case 'DOMAIN':
                    result.push(this.makeRule(name, `
                        <Targets>${rs.map(it => (it as r.RuleDomain).domain).join('; ')}</Targets>
                        ${this.makeAction(ruleItem.proxy)}
                    `))
                    break

                case 'DOMAIN_SUFFIX':
                    result.push(this.makeRule(name, `
                        <Targets>${rs.map(it => `*.${(it as r.RuleDomainSuffix).domain}`).join('; ')}</Targets>
                        ${this.makeAction(ruleItem.proxy)}
                    `))
                    break

                case 'DOMAIN_KEYWORD':
                    result.push(this.makeRule(name, `
                        <Targets>${rs.map(it => `*${(it as r.RuleDomainKeyword).keyword}*`).join('; ')}</Targets>
                        ${this.makeAction(ruleItem.proxy)}
                    `))
                    break

                case 'PROCESS_NAME':
                    result.push(this.makeRule(name, `
                        <Applications>${rs.map(it => (it as r.RuleProcessName).processName).join('; ')}</Applications>
                        ${this.makeAction(ruleItem.proxy)}
                    `))
                    break
                case 'FINAL':
                    result.push(this.makeRule('Default', this.makeAction(ruleItem.proxy)))
                    break

                case 'IP_RANGE':
                    result.push(this.makeRule(name, `
                        <Targets>${rs.map(it => ipRange(it as r.RuleIPRange)).join('; ')}</Targets>
                        ${this.makeAction(ruleItem.proxy)}
                    `))
                    break

                default:
                    throw new Error(`Not support ${name} in Proxifier`)
            }
        }

        return result
    }

    renderProxy(proxy: AllProxies): string {
        switch (proxy.type) {
            case 'socks5':
                this.proxiesIdCache.set(proxy.name, this.id)
                this.id += 1

                return `<Proxy id=${this.proxiesIdCache.get(proxy.name)} type="SOCKS5">
                    <Options>48</Options>
                    <Port>${proxy.port}</Port>
                    <Address>${proxy.address}</Address>
                    <Label>${proxy.name}</Label>
                </Proxy>`

            default:
                throw new Error(`Not support ${proxy.type} in Proxifier`)
        }
    }

    getRender(): Render {
        return new ProxifierRender()
    }
}
