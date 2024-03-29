const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');

// sayHi: String! --> required

const typeDefs = gql`
  type Query{
    sayHi: String!
  }
`

const resolvers = {
  Query:{
    sayHi: () => 'Hello World!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then((res) => {
    console.log(`Server running at ${res.url}`)
  })