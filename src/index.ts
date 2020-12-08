import MellowClient from '@/client/mellow'
import ProxifierClient from '@/client/proxifier'

const data = {
    client: new ProxifierClient(),

    rules: [
        ...require('@/data/rules'),
    ],

    proxies: [
        ...require('@/data/proxies'),
    ],
}


const proxies = data.proxies
    .filter(it => data.client.supportProxy(it))
    .map(it => data.client.renderProxy(it))


const rules = data.rules.filter(it => data.client.supportKeyword(it))
    .map(it => data.client.renderRule(it))

console.log(data.client.getRender().render({
    rules,
    proxies,
}))
