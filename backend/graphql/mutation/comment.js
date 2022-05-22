import { CommentTC } from "../../model/comment";

export const createComment = CommentTC.mongooseResolvers.createOne()