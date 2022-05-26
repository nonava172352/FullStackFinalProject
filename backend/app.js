import { createServer } from 'http'
const express = require('express')
const app = express()
const cors = require("cors")
const { PORT = 3000 } = process.env
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')
const util = require('util')

const deleteFile = util.promisify(fs.unlink)

import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'

// connect mongoDB
import './dbAdmin'
// graphql schema
import schema from './graphql'

import { uploadPostImage } from './s3'

app.use(cors("*"))
app.use(express.json())

app.post('/image', upload.single('image'), async (req, res) => {
    try {
        const file = req.file
        const result = await uploadPostImage(file)
        await deleteFile(file.path)

        res.status(201).send({
            "msg": "image successfully upload",
            "location": result.Location
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            "error": "Internal Server Error"
        })
    }
})

const startApolloServer = async () => {
    const httpServer = createServer(app)
    const apolloServer = new ApolloServer({
        schema,
        introspection: true,
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app, path: '/graphql' })
    httpServer.listen({ port: PORT })
}

console.log("Mongo db Connected");
startApolloServer()

