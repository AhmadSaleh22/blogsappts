export interface User {
    email: string;
    password: string;
    isButtonDisabled: boolean;
    helperText: string;
    isError: boolean;
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

// export interface Login 
export type Action = { type: 'setUsername', payload: string }
    | { type: 'setPassword', payload: string }
    | { type: 'setIsButtonDisabled', payload: boolean }
    | { type: 'loginSuccess', payload: string }
    | { type: 'loginFailed', payload: string }
    | { type: 'setIsError', payload: boolean };
