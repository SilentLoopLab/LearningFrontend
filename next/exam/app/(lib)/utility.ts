export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    attempts: number;
    clock: number | null;
}
