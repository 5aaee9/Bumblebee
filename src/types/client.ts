import { Render } from './config'
import * as rules from './rules'
import * as proxies from './proxy'


export type AllOptions = rules.RuleProcessName
| rules.RuleDomainSuffix
| rules.RuleFinal
| rules.RuleUserAgent
| rules.RuleDomain
| rules.RuleDomainKeyword
| rules.RuleGeoIP

export type AllProxies = proxies.Socks5Proxy

export type KeywordMapping = Partial<Record<AllOptions['type'], string>>

export interface Client {
    supportKeyword(keyword: AllOptions): boolean
    supportProxy(keyword: AllProxies): boolean
    renderRule(option: AllOptions): string
    renderProxy(proxy: AllProxies): string
    getRender(): Render
}
