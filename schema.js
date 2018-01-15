const typeDefs = `

type Subject {
    _id: String!
    name: String!
    datain: String!
    dataout: String!
}

type Query {
  allSubjects: [Subject!]!
}

type Mutation {
  createSubject(
      name: String!
    ): Subject!
}

`;

exports["default"] =  typeDefs;
module.exports = exports["default"];