export const DirectSymbol = Symbol('DIRECT')
export const RejectSymbol = Symbol('REJECT')

export type BuiltinSymbol = typeof DirectSymbol | typeof RejectSymbol

export const AllBuiltinSymbols = [
    DirectSymbol,
    RejectSymbol,
]
export type BuiltinReplacement = Record<BuiltinSymbol, string>
export type Proxy = string | symbol

export function getProxyName(proxy: Proxy, replacement: BuiltinReplacement): string {
    if (typeof proxy === 'string') {
        return proxy
    }

    return replacement[proxy]
}
