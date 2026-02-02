import bcrypt from "bcrypt";

export const Hash = async (data: string) => {
    const res = await bcrypt.hash(data, 10);
    console.log(res);
    return res;
};
