import { userModel } from "@/app/(lib)/(models)/UserModel";
import { pool } from "@/app/(lib)/config";

export const GET = async () => {
    const users = await userModel.findAll();
    return Response.json({users});
}