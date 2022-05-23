import { PostTC } from "../../model/post";
import { UserTC } from "../../model/user";
import { CommentTC } from "../../model/comment";

// // เมื่อ query Post จะเพิ่ม field 'author' เข้ามา ซึ่งได้มาจาก Resolver(findbyid)
PostTC.addRelation(
    'author',
    {
        resolver: UserTC.mongooseResolvers.findById(), // query จาก Resolver ตัวไหน
        projection: { authorId: 1 }, // project อะไรที่ซ้ำกันในตัวหลัก(Post) แบบว่า query User มาเเล้ว จะเอาตัวไหนบ้างต้อง project จากตัวแปรที่ซ้ำกันในตัวเรา ซึ่งก็คือเราอยากได้ user ทีมี authorID เหมือนกับใน post
        prepareArgs: {
            _id: (post) => post.authorId
        } // คือ args สำหรับการ query(findById)
    }
)

PostTC.addRelation(
    'comments',
    {
        resolver: CommentTC.mongooseResolvers.findMany(),
        projection: { _id: 1 },
        prepareArgs: {
            _id: (post) => post._id 
        }
    }
)