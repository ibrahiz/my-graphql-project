import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';

const typeDefs = gql`
  ${require('fs').readFileSync(require.resolve('./schema.graphql'), 'utf8')}
`;

const server = new ApolloServer({ typeDefs, resolvers });
const PORT = 3000;


async function startApolloServer(typeDefs: any, resolvers:any){
  const server = new ApolloServer({typeDefs, resolvers})
  const app: any = express();
  await server.start();
  server.applyMiddleware({ app });
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}${server.graphqlPath}`);
  })
}
startApolloServer(typeDefs, resolvers);