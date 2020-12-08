import { RenderState } from '@/types/config'
import {
    ProbClient, RenderConf,
} from './types/client'

export function clientConf(client: ProbClient, conf: RenderConf): string {
    const { rules, proxies } = conf

    const renderProxies = proxies
        .filter(it => client.supportProxy(it))
        .map(it => client.renderProxy(it))

    const renderRules = rules
        .filter(it => client.supportKeyword(it))

    let renderRulesResult: string[]

    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    if (client.renderType === 'multi') {
        renderRulesResult = client.renderRules(renderRules)
    } else {
        renderRulesResult = renderRules.map(it => client.renderRule(it))
    }

    const context: RenderState = {
        rules: renderRulesResult,
        proxies: renderProxies,
    }

    return client.getRender().render(context)
}
