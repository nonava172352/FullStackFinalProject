import mongoose from "mongoose";

const uri = 'mongodb://62070122:jl73xeNWfAzJfCHW@cluster1-shard-00-00.hlive.mongodb.net:27017,cluster1-shard-00-01.hlive.mongodb.net:27017,cluster1-shard-00-02.hlive.mongodb.net:27017/?ssl=true&replicaSet=atlas-g8q197-shard-0&authSource=admin&retryWrites=true&w=majority'
// const option = {
//     dbName: "fswd-final",
//     user: "62070122",
//     pass: "jicnOw0JQG8Q89FA",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }

export default mongoose.connect(uri)