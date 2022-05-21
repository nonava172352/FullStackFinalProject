import { composeWithMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

const socialMedia = {
    name: String,
    link: String,
    _id: false
}

// define data model
const TeacherSchema = new Schema({
    username: {
        type: String,
        default: ""
    },
    password: {
        type: String,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    profileLink: {
        type: String,
    },
    contact: {
        phone: {
            type: String
        },
        email: {
            type: String
        },
        social: {
            type: [socialMedia]
        }
    },
    room: {
        type: String
    }
})

// create table instance
export const TeacherModel = model('Teacher', TeacherSchema)
// create type compose of graphql
export const TeacherTC = composeWithMongoose(TeacherModel)