import { AllOptions } from '@/types/client'

const proxy = 'DIRECT'

const items: AllOptions[] = [{
    type: 'DOMAIN_SUFFIX',
    domain: 'acg.tv',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'acgvideo.com',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'b23.tv',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'biliapi.com',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'biliapi.net',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'bilibili.com',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'biligame.com',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'biligame.net',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'hdslb.com',
    proxy,
}, {
    type: 'DOMAIN_SUFFIX',
    domain: 'im9.com',
    proxy,
}, {
    type: 'USER_AGENT',
    agent: '*bili*',
    proxy,
}, {
    type: 'DOMAIN_KEYWORD',
    keyword: 'bilibili',
    proxy,
}]

export default items
