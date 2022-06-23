import { ApolloClient, InMemoryCache } from "@apollo/client";

// Vai fazer o cache direto na memória da aplicação como variáveis

export const client  = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4osnsh40tif01xt7y042v2j/master',
    cache: new InMemoryCache()
})