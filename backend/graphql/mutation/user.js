import { schemaComposer } from "graphql-compose" // เช็คที่เป็น schemaComposer != SchemaComposer
import { UserModel, UserTC } from "../../model/user"


// // สร้าง obj type ไว้สำหรับ return
// const loginPayload = schemaComposer.createObjectTC({
//     name: 'loginPayload',
//     fields: {
//         status: 'String!',
//         token: 'String'
//     }
// })

// export const createUser = UserTC.getResolver('createOne')
// export const login = schemaComposer.createResolver({
//     name: 'login',
//     kind: 'mutation', // ประเภทของ Resolver นี้
//     // type: 'String', // type ใส่ได้แค่อันเดียว ถ้าเป็น obj หรืออะไรที่ใน default ไม่มีให้ต้องมา define type เอง
//     type: 'loginPayload', // type แบบสร้างเอง
//     args: {
//         username: 'String!',
//         password: 'String!'
//     },
//     // resolve: async ({ args }) => {
//     //     const { username, password } = args
//     //     const user = await UserModel.findOne({ username: username })

//     //     if (!user) {
//     //         throw new Error("Username not Found")
//     //     }
//     //     const validPassword = () => {
//     //         if (user.password === password) {
//     //             return true
//     //         } else {
//     //             return false
//     //         }
//     //     }

//     //     if (!validPassword) {
//     //         throw new Error("Password Incorrect")
//     //     }

//     //     return `Welcome ${user.name}`
//     // } // resovler ของ type String
//     resolve: async ({ args }) => {
//         const { username, password } = args
//         const user = await UserModel.findOne({ username: username })

//         if (!user) {
//             return {
//                 status: 'Fail', // format ต้องตรงกันตามที่ define ใน type
//                 token: ''
//             }
//         }
        
//         const validPassword = () => {
//             if (user.password === password) {
//                 return true
//             } else {
//                 return false
//             }
//         }

//         if (!validPassword) {
//             return {
//                 status: 'Fail', // format ต้องตรงกันตามที่ define ใน type
//                 token: ''
//             }
//         }

//         return {
//             status: 'Login Complete', // format ต้องตรงกันตามที่ define ใน type
//             token: user.name
//         }
//     } // resovler ของ type loginPayload
// })

// // mutation => มีการจัดการกับข้อมูล