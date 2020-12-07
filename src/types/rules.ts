export type RuleProcessName = {
    Type: 'PROCESS_NAME'
    ProcessName: string
    Proxy: string
}

export type RuleDomainSuffix = {
    Type: 'DOMAIN_SUFFIX'
    Domain: string
    Proxy: string
}

export type RuleFinal = {
    Type: 'FINAL'
    Proxy: string
}
