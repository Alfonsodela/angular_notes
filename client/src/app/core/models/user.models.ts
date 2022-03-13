export interface User {
    _id?: string;
    name?: string;
    email: string;
    password: string;
    emoji?: string;
}


export interface UserSignInResponse {
    token: string;
    expiresIn: number;
    _id: string;
}

export interface UserSignUpResponse {
    mesage: string;
    result?: User;
}