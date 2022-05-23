import { PostTC } from "../../model/post";

export const createPost = PostTC.mongooseResolvers.createOne()
export const updatePostId = PostTC.mongooseResolvers.updateById()
export const deletePost = PostTC.mongooseResolvers.removeById()
