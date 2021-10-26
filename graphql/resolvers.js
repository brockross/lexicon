import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.ATLAS_CONNECTION_STRING);

export const resolvers = {
  Query: {
    allTerms: async () => {
      const getTerms = async () => {
        await client.connect();
        const terms = client.db("lexicon").collection("terms");

        const allTerms = terms.find({});
        return allTerms.toArray();
      };

      const terms = await getTerms();
      return terms;
    },
  },
};

/* * * * * * * */
// sample data
// const json = {
//   "id": 1,
//   "term": "Peter Principle",
//   "definitions": [
//     {
//       "shortDesc": "The idea that people in tech companies tend to be promoted until they reach a role at which they are incompetent.",
//       "longDesc": "blah blah give more historical context etc",
//       "furtherReading": ["https://wikipedia.com"],
//       "tags": ["jargon"]
//     }
//   ]
// }
