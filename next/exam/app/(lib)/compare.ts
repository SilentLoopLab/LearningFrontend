import bcrypt from "bcrypt";

export const validPassword = async (hash: string, data: string) => {
    if (!data) {
        return false;
    }
    return await bcrypt.compare(data, hash);
};
