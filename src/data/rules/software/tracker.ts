import { AllOptions } from '@/types/client'
import { RejectSymbol } from '@/utils/builtin'

const proxy = RejectSymbol

const items: AllOptions[] = [
    'footprintdns.com',
].map(it => ({
    type: 'DOMAIN_SUFFIX',
    domain: it,
    proxy,
}))

export default items
