import { Proxy } from '@/utils/builtin'

export type RuleProcessName = {
    type: 'PROCESS_NAME'
    processName: string
    proxy: Proxy
}

export type RuleDomainSuffix = {
    type: 'DOMAIN_SUFFIX'
    domain: string
    proxy: Proxy
}

export type RuleFinal = {
    type: 'FINAL'
    proxy: Proxy
}

export type RuleUserAgent = {
    type: 'USER_AGENT'
    agent: string
    proxy: Proxy
}

export type RuleDomain = {
    type: 'DOMAIN'
    domain: string
    proxy: Proxy
}

export type RuleDomainKeyword = {
    type: 'DOMAIN_KEYWORD'
    keyword: string
    proxy: Proxy
}

export type RuleGeoIP = {
    type: 'GEO_IP'
    geo: string
    proxy: Proxy
}

export type RuleIPRange = {
    type: 'IP_RANGE'
    ip: string
    prefix: number
    proxy: Proxy
}
