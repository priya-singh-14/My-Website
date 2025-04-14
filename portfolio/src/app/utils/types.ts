export interface Project {
    id : string,
    title: string,
    cardImage?: string,
    mockup: string,
    description: string,
    techstack: string,
    link?: string,
    carousel: Array<string>,
    bullets: Array<string>,
    purpose?: string,
    process?: string,
    demo?: string,
}