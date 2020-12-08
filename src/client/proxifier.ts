import { Client, AllOptions, AllProxies } from '@/types/client';
import ProxifierRender from '@/config/proxifier'
import { Render } from '@/types/config';
import {
    BuiltinReplacement, DirectSymbol, RejectSymbol, getProxyName, Proxy, AllBuiltinSymbols,
} from '@/utils/builtin'

export default class ProxifierClient implements Client {
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

    renderRule(option: AllOptions): string {
        switch (option.type) {
            case 'DOMAIN':
                return this.makeRule(`${option.type} - ${option.domain}`, `
                    <Targets>${option.domain}</Targets>
                    ${this.makeAction(option.proxy)}
                `)

            case 'DOMAIN_SUFFIX':
                return this.makeRule(`${option.type} - ${option.domain}`, `
                    <Targets>*.${option.domain}</Targets>
                    ${this.makeAction(option.proxy)}
                `)

            case 'DOMAIN_KEYWORD':
                return this.makeRule(`${option.type} - ${option.keyword}`, `
                    <Targets>*${option.keyword}*</Targets>
                    ${this.makeAction(option.proxy)}
                `)

            case 'PROCESS_NAME':
                return this.makeRule(`${option.type} - ${option.processName}`, `
                    <Applications>${option.processName}</Applications>
                    ${this.makeAction(option.proxy)}
                `)
            case 'FINAL':
                return this.makeRule('Default', this.makeAction(option.proxy))

            default:
                throw new Error(`Not support ${option.type} in Proxifier`)
        }
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
