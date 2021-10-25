const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type TestyBoi {
    id: Int
    label: String
  }

  type Query {
    testResults: [TestyBoi]
  }
`;

const testData = [
  { id: 1, label: "I'm number one" },
  { id: 2, label: "Dos is el best" },
  { id: 3, label: "threeee" },
];

const resolvers = {
  Query: {
    testResults: () => testData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server listening at ${url}`);
});
