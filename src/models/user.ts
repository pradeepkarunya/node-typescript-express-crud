export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
}

export interface createUserRequest {
    name: string;
    email: string;
    age: number;
}

export interface updateUserRequest {
    name?: string;
    email?: string;
    age?: number;
}

export interface deleteUserRequest {
    id: string;
}