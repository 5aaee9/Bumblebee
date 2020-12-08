import ProxifierClient from '@/client/proxifier'
import rules from '@/data/rules'
import proxies from '@/data/proxies'

import { clientConf } from './core'

console.log(clientConf(new ProxifierClient(), {
    rules, proxies,
}))
