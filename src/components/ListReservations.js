/*
@module /components/ListReservations
@description Display a list of existing reservations

List all props here -------
@param description
@param title
---------------------------


@author Michael Stelly
@version 1.0
@copyright (c) 2019 Michael Stelly All Rights Reserved.
Date: 20 Feb 2019
*/

import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container } from 'native-base'
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import gql from 'graphql-tag'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
  }),
  cache: new InMemoryCache()
});

const resQuery = gql`
  {
    reservations {
        id
        name
        hotelName
        arrivalDate
        departureDate
    }
  }
`

const Reservations = graphql(resQuery)(props => {
  const { error, reservations } = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (reservations) {
    return <Text>{reservations[0].hotelName}</Text>;
  }

  return <Text>Loading...</Text>;
});

class ListReservations extends Component {

  render() {
    return (
      <Container>
        <ApolloProvider client={client}>
          <Text>List Reservations</Text>
          <Reservations />
        </ApolloProvider>
      </Container >
    )
  }
}

export default ListReservations