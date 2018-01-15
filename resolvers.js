const resolvers = {
  Query: {
    allSubjects: function(parent, args, { Subject }){
      const subjects = Subject.find();
      return subjects
    },
  },
  Mutation: {
    createSubject: function(parent, args, { Subject }){

      const subject = new Subject(args).save();
      return subject;
    },
  },
};
exports["default"] = resolvers; 
module.exports = exports["default"];