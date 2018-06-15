const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bearerToken = require('express-bearer-token');
const schema = require('./schema');

const { PORT = 3000 } = process.env;
const app = express();

app.use(bearerToken());
app.use(cors());

app.use(
  '/graphql',
  bodyParser.json(),

  graphqlExpress(req => ({
    schema,
    // Temp workaround: retrieve current userId from client
    // TODO: secure session
    context: { token: req.token, userId: req.headers['x-userid'] },
    formatError: error => {
      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack ? error.stack.split('\n') : [],
        path: error.path,
      };
    },
  })),
);
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => {
  console.log('Server listening on port', PORT);
});
