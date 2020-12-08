export type Socks5Proxy = {
    type: 'socks5'
    name: string
    address: string
    port: number
    user?: string
    pass?: string
}
