import { composeWithMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

// define data model
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true // delete write space
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    }
}, {
    timestamps: true
})

// create table instance
export const UserModel = model('User', UserSchema)
// create type compose of graphql
export const UserTC = composeWithMongoose(UserModel)