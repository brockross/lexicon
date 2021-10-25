import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema.js";

const testData = [
  {
    id: 1,
    term: "SRP",
    definitions: [
      {
        shortDesc:
          "Acronym for Single Responsibility Principle--the idea that a given function/method/class should have only one responsibility.",
        longDesc: "blah blah blah long description",
        furtherReading: ["https://somesite.com/srp"],
        tags: ["acronym"],
      },
      {},
    ],
  },
];

const resolvers = {
  Query: {
    lexicon: () => testData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server listening at ${url}`);
});
