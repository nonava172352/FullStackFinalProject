import { composeWithMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

const socialMedia = {
    name: String,
    link: String,
    _id: false
}

// define data model
const StudentSchema = new Schema({
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
    studentId: {
        type: String
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
})

// create table instance
export const StudentModel = model('Student', StudentSchema)
// create type compose of graphql
export const StudentTC = composeWithMongoose(StudentModel)