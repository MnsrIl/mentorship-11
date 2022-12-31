export interface Role {
    id: number,
    authority: string
}

export interface UserDetails {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    age: number
    authorities: Role[];
}
