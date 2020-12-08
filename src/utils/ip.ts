function toIP(n: number): string {
    return [
        (n >>> 24) & 0xFF,
        (n >>> 16) & 0xFF,
        (n >>>  8) & 0xFF,
        (n >>>  0) & 0xFF,
    ].join('.');
}

// Unsigned number
function u(n: number): number {
    return n >>> 0;
}

function toNumber(ip: string): number {
    return ip.split('.').map(it => parseInt(it)).reduce((a: number, o: number) =>
        u(+a << 8) + +o
    , 0)
}

type CidrResult = {
    begin: string
    end: string
}

export function parseCidr(ip: string, prefix: number): CidrResult {
    const mask = u(~0 << (32 - +prefix))
    const addr32 = toNumber(ip)

    return {
        begin: toIP(u(addr32 & mask)),
        end: toIP(u(addr32 | ~mask)),
    }
}

