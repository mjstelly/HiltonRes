import React, { Component } from 'react'
import AppNavigator from './AppNavigator'
import { ApolloProvider, graphql } from 'react-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
  }),
  cache: new InMemoryCache()
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    )
  }
}
