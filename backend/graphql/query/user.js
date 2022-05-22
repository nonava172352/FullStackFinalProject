import { UserTC } from "../../model/user"

export const users = UserTC.mongooseResolvers.findMany()
export const userId = UserTC.mongooseResolvers.findById()