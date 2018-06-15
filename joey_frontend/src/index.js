import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { ApolloProvider } from "react-apollo";
import { client } from "./helpers/apolloClient";
import { styledTheme } from "./helpers/styledTheme";

import { ThemeProvider } from "styled-components";

const APP = (
  <ApolloProvider client={client}>
    <ThemeProvider theme={styledTheme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);

ReactDOM.render(APP, document.getElementById("root"));
registerServiceWorker();
