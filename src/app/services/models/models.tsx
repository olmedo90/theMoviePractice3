export interface RequestOptions {
    endpoint: string,
    method: string,
    options?: object,
    body?: any
    isFile?: boolean
}
export interface Post { 
    userId: number,
    id: number,
    title: string,
    body: string
}
 export interface Movie{
    id: number,
    original_title: string,
    overview: string,
    vote_count: number
    release_date: string,
    poster_path: string
 }
