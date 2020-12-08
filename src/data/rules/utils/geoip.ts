import { AllOptions } from '@/types/client'
import { DirectSymbol } from '@/utils/builtin'

const proxy = DirectSymbol

const items: AllOptions[] = [{
    type: 'GEO_IP',
    geo: 'cn',
    proxy,
}, {
    type: 'GEO_IP',
    geo: 'private',
    proxy,
}]

export default items
