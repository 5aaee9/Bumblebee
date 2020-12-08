
export type RenderState = {
    rules: string[]
    proxies: string[]
}

export interface Render {
    render(state: RenderState): string
}
