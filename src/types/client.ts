import { Render } from './config'
import * as rules from './rules'

export type AllOptions = rules.RuleProcessName
| rules.RuleDomainSuffix
| rules.RuleFinal
| rules.RuleUserAgent
| rules.RuleDomain
| rules.RuleDomainKeyword
| rules.RuleGeoIP

export type KeywordMapping = Partial<Record<AllOptions['type'], string>>

export interface Client {
    supportKeyword(keyword: AllOptions): boolean
    renderRule(options: AllOptions): string
    getRender(): Render
}
