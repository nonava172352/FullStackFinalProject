import { PostTC } from "../../model/post";
import { UserTC } from "../../model/user";

UserTC.addRelation(
    'posts',
    {
        resolver: PostTC.mongooseResolvers.findMany(),
        projection: { _id: 1 },
        prepareArgs: {
            filter: (user) => {
                authorId: user._id
            }
        },
    },
)

// UserTC.addFields({
//     contact: {
//         type: "String", // เวลา defind type ใน gql ต้องมี "ครอบ" เสมอ
//         projection: {name: 1, email: 1},
//         resolve: (user) => `${user.name} email:${user.email}` // ตัว logic ที่ใช้สำหรับต่อ field
//     }
// })

// resolver => ตัว resolver ที่มาจาก Type Compose
// resolve => เป็นตัวที่เราสร้างเอง เรียกใช้ได้เลย (มาคู่กับ type เสมอ หากมี type ก็ต้องมี resolve)