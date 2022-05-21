import { createServer } from 'http'
const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000

import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'

// connect mongoDB
import './dbAdmin'
// graphql schema
import schema from './graphql'

app.use(cors("*"))
app.use(express.json())

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
    httpServer.listen({ port: port })
}

console.log("Mongo db Connected");
startApolloServer()
