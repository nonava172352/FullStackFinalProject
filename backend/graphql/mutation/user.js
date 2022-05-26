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
        profile: "String",
        contact: "JSON!",
        type: "String!",
        studentId: "String!",
        branch: "String!",
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
            profile: args.profile,
            contact: args.contact,
            type: args.type,
            studentId: args.studentId,
            branch: args.branch,
            program: args.program
        })

        return response
    }
})

export const updateTeacherId = schemaComposer.createResolver({
    name: "updateTeacher",
    kind: "mutation",
    type: "JSON!",
    args: {
        _id: "String!",
        password: "String",
        firstname: "String",
        lastname: "String",
        profile: "String",
        contact: "JSON",
        room: "String"
    },
    resolve: async ({ args }) => {
        const user = await UserModel.findOne({
            _id: args._id
        })

        let password
        if (args.password !== undefined) {
            const salt = user.salt
            const encypt = crypto.pbkdf2Sync(args.password, salt, 1000, 32, 'sha512').toString('hex')
            password = encypt
        } else {
            password = user.password
        }

        const firstname = args.firstname || user.firstname
        const lastname = args.lastname || user.lastname
        const profile = args.profile || user.profile
        const contact = args.contact || user.contact
        const room = args.room || user.room

        const payload = {
            password: password,
            firstname: firstname,
            lastname: lastname,
            profile: profile,
            contact: contact,
            room: room
        }

        const response = await UserModel.findByIdAndUpdate({"_id": args._id}, payload)

        return response
    }
})

export const updateStudentId = schemaComposer.createResolver({
    name: "updateStudentId",
    kind: "mutation",
    type: "JSON!",
    args: {
        _id: "String!",
        password: "String",
        firstname: "String",
        lastname: "String",
        profile: "String",
        contact: "JSON",
        branch: "String",
    },
    resolve: async ({ args }) => {
        const user = await UserModel.findOne({
            _id: args._id
        })

        let password
        if (args.password !== undefined) {
            const salt = user.salt
            const encypt = crypto.pbkdf2Sync(args.password, salt, 1000, 32, 'sha512').toString('hex')
            password = encypt
        } else {
            password = user.password
        }

        const firstname = args.firstname || user.firstname
        const lastname = args.lastname || user.lastname
        const profile = args.profile || user.profile
        const contact = args.contact || user.contact
        const branch = args.branch || user.branch

        const payload = {
            password: password,
            firstname: firstname,
            lastname: lastname,
            profile: profile,
            contact: contact,
            branch: branch
        }

        const response = await UserModel.findByIdAndUpdate({"_id": args._id}, payload)
        
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