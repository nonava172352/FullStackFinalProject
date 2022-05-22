import { composeMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

const socialMedia = new Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    }
}, {
    _id: false
})

// define data model
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    contact: {
        phone: {
            type: String,
            required: true
        },
        social: {
            type: [socialMedia],
        }
    },
    type: {
        type: String,
        enum: ["Teacher", "Student"],
        required: true,
    },
}, {
    timestamps: true,
    discriminatorKey: 'type',
})

// create table instance
export const UserModel = model('User', UserSchema)

const studentDetail = UserModel.discriminator('Student', new Schema({
    studentId: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        enum: ["SE", "Network", "Multi", null]
    },
    program: {
        type: String,
        enum: ["IT", "DSBA", "BIT"]
    }
}))

const TeacherDetail = UserModel.discriminator('Teacher', new Schema({
    room: {
        type: String,
        required: true
    }
}))

// create type compose of graphql
export const UserTC = composeMongoose(UserModel)