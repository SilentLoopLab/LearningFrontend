import { IUser } from "./utility";

export const timeCheck = (user: IUser) => {
    if (!user.clock) {
        return true;
    }
    const now = Date.now();
    if (now - user.clock < 600000) {
        return false;
    }
    return true;
};
