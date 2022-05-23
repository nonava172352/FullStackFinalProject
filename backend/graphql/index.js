import { schemaComposer } from "graphql-compose";

import './relations'
import * as queries from './query'
import * as mutation from './mutation'

schemaComposer.Query.addFields(queries)
schemaComposer.Mutation.addFields(mutation)

const schema = schemaComposer.buildSchema()

export default schema