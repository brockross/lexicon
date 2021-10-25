import { gql } from "apollo-server";

export const typeDefs = gql`
  type Term {
    id: ID
    term: String
    definitions: [Definition]
  }

  type Definition {
    shortDesc: String
    longDesc: String
    furtherReading: [String]
    tags: [Tag]
  }

  enum Tag {
    acronym
    corpspeak
    technology
    jargon
  }

  type Query {
    lexicon: [Term]
  }
`;
