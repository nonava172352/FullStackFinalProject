import { CommentTC } from "../../model/comment";

export const createComment = CommentTC.mongooseResolvers.createOne()
export const updateCommentId = CommentTC.mongooseResolvers.updateById()
export const deleteCommnetId = CommentTC.mongooseResolvers.removeById()