const { GraphQLInputObjectType, GraphQLString } = require('graphql');

const LoginInputType = new GraphQLInputObjectType({
  name: 'LoginInputType',
  description: 'Authentification with email and password',
  field: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
});

module.exports = { LoginInputType };
