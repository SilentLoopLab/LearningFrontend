import { IUser } from "./utility";

const LOCK_DURATION = 10 * 60 * 1000;
const MAX_ATTEMPTS = 3;

export const checkAttempts = (user: IUser) => {
    if (user.attempts < MAX_ATTEMPTS) {
        return true;
    }
    if (user.clock) {
        const now = Date.now();
        const lockExpired = now - user.clock >= LOCK_DURATION;

        if (!lockExpired) {
            return false;
        }

        user.attempts = 0;
        user.clock = null as any;
        return true;
    }
    
    user.clock = Date.now();
    return false;
};
