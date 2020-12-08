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
| rules.RuleIPRange

export type AllProxies = proxies.Socks5Proxy

export type KeywordMapping = Partial<Record<AllOptions['type'], string>>

export type RenderRuleType = 'multi' | 'singleton'

export interface Client {
    supportKeyword(keyword: AllOptions): boolean
    supportProxy(keyword: AllProxies): boolean
    renderProxy(proxy: AllProxies): string
    getRender(): Render
}

export type MultiRuleClient = {
    renderType: 'multi'
    renderRules(options: AllOptions[]): string[]
}

export type SingletonRuleClient = {
    renderType: 'singleton'
    renderRule(option: AllOptions): string
}

export type RenderConf = {
    proxies: AllProxies[]
    rules: AllOptions[]
}

export type ProbClient = (Client & (MultiRuleClient | SingletonRuleClient))
