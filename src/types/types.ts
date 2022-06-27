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
