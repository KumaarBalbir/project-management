const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schema");
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
