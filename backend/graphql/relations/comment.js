import { CommentTC } from "../../model/comment";
import { UserTC } from "../../model/user";

CommentTC.addRelation(
    'commentor',
    {
        resolver: UserTC.mongooseResolvers.findById(),
        projection: { authorId: 1 },
        prepareArgs: {
            _id: (user) => user.authorId
        },
    }
)