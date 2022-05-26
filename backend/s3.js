require('dotenv').config()
const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_BUCKET_REGION
})

const s3 = new AWS.S3();

export const uploadPostImage = (image) => {
    const fileStream = fs.createReadStream(image.path)
    const payload = {
        Bucket: "mypostimagebucket",
        Body: fileStream,
        Key: image.filename
    }

    return s3.upload(payload).promise()
}