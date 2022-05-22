import { composeMongoose, composeWithMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

// define data model
const PostSchema = new Schema({
    content: {
        type: String,
        default: ""
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

// create table instance
export const PostModel = model('Post', PostSchema)
// create type compose of graphql
export const PostTC = composeMongoose(PostModel)