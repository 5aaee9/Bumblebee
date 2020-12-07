export type RuleProcessName = {
    type: 'PROCESS_NAME'
    processName: string
    proxy: string
}

export type RuleDomainSuffix = {
    type: 'DOMAIN_SUFFIX'
    domain: string
    proxy: string
}

export type RuleFinal = {
    type: 'FINAL'
    proxy: string
}

export type RuleUserAgent = {
    type: 'USER_AGENT'
    agent: string
    proxy: string
}

export type RuleDomain = {
    type: 'DOMAIN'
    domain: string
    proxy: string
}

export type RuleDomainKeyword = {
    type: 'DOMAIN_KEYWORD'
    keyword: string
    proxy: string
}

export type RuleGeoIP = {
    type: 'GEO_IP'
    geo: string
    proxy: string
}
