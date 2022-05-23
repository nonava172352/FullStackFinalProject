import { schemaComposer } from "graphql-compose" // เช็คที่เป็น schemaComposer != SchemaComposer
import { UserModel, UserTC } from "../../model/user"

const crypto = require('crypto');

export const createTecher = schemaComposer.createResolver({
    name: "createTecher",
    kind: "mutation",
    type: "JSON!",
    args: {
        email: "String!",
        password: "String!",
        firstname: "String!",
        lastname: "String!",
        profile: "String",
        contact: "JSON!",
        type: "String!",
        room: "String!"
    },
    resolve: async ({ args }) => {
        const salt = crypto.randomBytes(16).toString('hex');
        const encypt = crypto.pbkdf2Sync(args.password, salt, 1000, 32, 'sha512').toString('hex')

        const response = await UserModel.create({
            email: args.email,
            password: encypt,
            salt: salt,
            firstname: args.firstname,
            lastname: args.lastname,
            profile: args.profile,
            contact: args.contact,
            type: args.type,
            room: args.room
        })

        return response
    }
})

export const createStudent = schemaComposer.createResolver({
    name: "createStudent",
    kind: "mutation",
    type: "JSON!",
    args: {
        email: "String!",
        password: "String!",
        firstname: "String!",
        lastname: "String!",
        contact: "JSON!",
        type: "String!",
        studentId: "String!",
        branch: "String",
        program: "String!"
    },
    resolve: async ({ args }) => {
        const salt = crypto.randomBytes(16).toString('hex');
        const encypt = crypto.pbkdf2Sync(args.password, salt, 1000, 32, 'sha512').toString('hex')

        const response = await UserModel.create({
            email: args.email,
            password: encypt,
            salt: salt,
            firstname: args.firstname,
            lastname: args.lastname,
            contact: args.contact,
            type: args.type,
            studentId: args.studentId,
            branch: args.branch,
            program: args.program
        })

        return response
    }
})

export const login = schemaComposer.createResolver({
    name: "login",
    kind: "mutation",
    type: "JSON",
    args: {
        email: "String!",
        password: "String!",
    },
    resolve: async ({ args }) => {
        const user = await UserModel.findOne({
            email: args.email
        })

        const salt = user.salt
        const encypt = crypto.pbkdf2Sync(args.password, salt, 1000, 32, 'sha512').toString('hex')
        if (encypt === user.password) {
            return user
        } else {
            return {
                "error" : true,
                "msg": "Incorrect password"
            }
        }
    }
})