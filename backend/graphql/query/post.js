import { PostTC } from "../../model/post";

export const posts = PostTC.mongooseResolvers.findMany()