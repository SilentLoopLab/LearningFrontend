import { BaseModel } from "./BaseModel";

class PostsModel extends BaseModel {
    tableName: string = 'posts'
}

export const postModel = new PostsModel();