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

import React, { PureComponent } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container } from 'native-base';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag';
// import console from 'console';

const client = new ApolloClient({
  link: new HttpLink({
    uri:
      'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev',
  }),
  cache: new InMemoryCache(),
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
`;

const Reservation = (props) => {
  // console.log(props.props);
  const { name, hotelName } = props.props;
  return (
    <View
      style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}
    >
      <Text>Name: {name}</Text>
      <Text>Hotel: {hotelName}</Text>
    </View>
  );
};
const toArray = (obj) => {
  return Object.entries(obj);
};

const ReservationList = (props) => {
  if (props) {
    const resArray = toArray(props);
    return (
      <FlatList
        data={resArray[0][1]}
        renderItem={({ item }) => <Reservation props={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
};

const Reservations = graphql(resQuery)((props) => {
  const { error, reservations } = props.data;
  if (error) {
    return <Text>{error}</Text>;
  }
  if (reservations) {
    return <ReservationList props={reservations} />;
  }

  return <Text>Loading...</Text>;
});

class ListReservations extends PureComponent {
  render() {
    return (
      <Container>
        <ApolloProvider client={client}>
          <Text>List Reservations</Text>
          <Reservations />
        </ApolloProvider>
      </Container>
    );
  }
}

export default ListReservations;
