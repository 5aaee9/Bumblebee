import { AllOptions } from '@/types/client'
import { DirectSymbol } from '@/utils/builtin'

const proxy = DirectSymbol

const items: AllOptions[] = [{
    type: 'DOMAIN_SUFFIX',
    domain: 'music.126.net',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'music.163.com',
    proxy,
}, {
    type: 'USER_AGENT',
    agent: 'NeteaseMusic*',
    proxy,
}, {
    type: 'USER_AGENT',
    agent: '%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90*',
    proxy,
}]

export default items
