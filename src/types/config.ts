
export type RenderState = {
    rules: string[]
}

export interface Render {
    render(state: RenderState): string
}
