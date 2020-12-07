import MellowClient from '@/client/mellow'

const data = {
    client: new MellowClient(),

    rules: [
        ...require('./data/rules'),
    ],
}

const rules = data.rules.filter(it => data.client.supportKeyword(it))
    .map(it => data.client.renderRule(it))

console.log(data.client.getRender().render({
    rules,
}))
