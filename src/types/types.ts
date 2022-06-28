export interface User {
    name: string;
    password: string;
}

export interface Blog {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface PostBlog {
    title: string;
    body: string;
    userId: number;
}

export interface PostRequest {
    url?: string;
    headers?: any;
    payload?: PostBlog;
}

