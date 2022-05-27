import { schemaComposer } from "graphql-compose"
import { UserTC, UserModel } from "../../model/user"

export const users = UserTC.mongooseResolvers.findMany()
export const userId = UserTC.mongooseResolvers.findById()
export const searchUser = schemaComposer.createResolver({
    name: "searchUser",
    kind: "query",
    type: "[JSON]",
    args: {
        search: "String!"
    },
    resolve: async ({ args }) => {
        const users = await UserModel.find()
        const result = []

        users.forEach(user => {
            const fullname = user.firstname + user.lastname
            
            if (fullname.includes(args.search) || user.email.includes(args.search)) {
                result.push(user)
            } else if (user.type === "Student" && user.studentId.includes(args.search)) {
                result.push(user)
            }
        })

        return result
    }
})