import * as rules from './rules'

export type AllOptions = rules.RuleProcessName |
    rules.RuleDomainSuffix |
    rules.RuleFinal

export interface Client {
    supportKeyword(keyword: AllOptions): boolean
    renderRule(options: AllOptions): string
}
