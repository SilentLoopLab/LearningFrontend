export interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    password?: string;
}

export interface IAccount extends IUser {
    id: number;
    avatar?: string;
    bio?: string;
    isAccountPrivate?: boolean;
    followings: [];
    followers: [];
    posts: [];
    email?: string;
}

export interface IContext {
    user: IAccount;
    setAccount: (a: IAccount | null) => void;
}
