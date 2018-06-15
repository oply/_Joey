const { AuthentificationResponseType } = require('./types');
const { LoginInputType } = require('./inputType');
const { GraphQLNonNull } = require('graphql');

const login = {
  type: AuthentificationResponseType,
  args: {
    input: { type: new GraphQLNonNull(LoginInputType) },
  },
  resolve(rootValue, { input: credentials }, context) {
    console.log(credentials);

    return credentials;
  },
};

module.exports = { login };
