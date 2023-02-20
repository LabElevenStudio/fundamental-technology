import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:40000/graphql",
    cache: new InMemoryCache(),
});

export default client;