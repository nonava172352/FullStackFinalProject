import { composeMongoose } from "graphql-compose-mongoose"
import { model, Schema } from "mongoose"

// define data model
const CommentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

// create table instance
export const CommentModel = model('Comment', CommentSchema)
// create type compose of graphql
export const CommentTC = composeMongoose(CommentModel)