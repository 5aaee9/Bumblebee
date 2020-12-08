import { AllOptions } from '@/types/client'
import { DirectSymbol } from '@/utils/builtin'

const proxy = DirectSymbol

const items: AllOptions[] = [
    's-microsoft.com',
    'microsoft.com',
    'live.com',
    'xboxlive.com',
    'msedge.net',
    'office.com',
    'office365.com',
    'azureedge.net',
    'bing.com',
    'msn.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
}))

export default items
