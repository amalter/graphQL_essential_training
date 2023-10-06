import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import resolvers from "./data/resolvers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("GraphQL is amazing!");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8080, () =>
  console.log("running server on port localhost:8080/graphql")
);
