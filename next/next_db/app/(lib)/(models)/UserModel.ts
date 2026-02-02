import { BaseModel } from "./BaseModel";

class UserModel extends BaseModel {
    tableName: string = 'users'
}

export const userModel = new UserModel();