/*
@module src/components/Home
@description Starting point of the app

@author Michael Stelly
@version 1.0
@copyright (c) 2019 Michael Stelly All Rights Reserved.
Date: 27 Feb 2019
*/

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button, Container } from 'native-base'

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Container
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Button primary onPress={() => navigate('AddReservation')}>
          <Text>Add Reservation</Text>
        </Button>
        <Button primary onPress={() => navigate('ListReservations')}>
          <Text>List Reservations</Text>
        </Button>
      </Container>
    )
  }
}

export default Home
