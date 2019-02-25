
import React, { Component } from 'react'
import AppNavigator from './AppNavigator'

// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'

// const client = new ApolloClient({
//     uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
// })

export default class App extends Component {

  render() {
    return (
      // <ApolloProvider client={client}>
      <AppNavigator />
      // </ApolloProvider>

    )
  }
}
