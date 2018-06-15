const { GraphQLObjectType, GraphQLString } = require('graphql');

const AuthentificationResponseType = new GraphQLObjectType({
  name: 'AuthentificationResponseType',
  field: {
    email: { type: GraphQLString },
  },
});

module.exports = { AuthentificationResponseType };
