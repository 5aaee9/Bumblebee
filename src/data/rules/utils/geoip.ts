import { AllOptions } from '@/types/client'

const proxy = 'DIRECT'

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
