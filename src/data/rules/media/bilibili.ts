import { AllOptions } from '@/types/client'
import { DirectSymbol } from '@/utils/builtin'

const proxy = DirectSymbol

const items: AllOptions[] = [{
    type: 'USER_AGENT',
    agent: '*bili*',
    proxy,
}, {
    type: 'DOMAIN_KEYWORD',
    keyword: 'bilibili',
    proxy,
}, ...([
    'acg.tv',
    'acgvideo.com',
    'b23.tv',
    'biliapi.com',
    'biliapi.net',
    'bilibili.com',
    'biligame.com',
    'biligame.net',
    'hdslb.com',
    'im9.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
})) as AllOptions[]) ]

export default items
