var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var graphqlHTTP = require('express-graphql');
var { makeExecutableSchema } = require('graphql-tools');

var Subject = require('./subject');
var typeDefs = require('./schema');
var resolvers = require('./resolvers');

var app = express();

mongoose.connect('mongodb://localhost/lola', { useMongoClient: true }, function(err, res){
  if(err) console.log(err);
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  schema,
  context: { Subject},
  graphiql: true,
})).listen(8000);
