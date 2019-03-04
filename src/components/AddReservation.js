/*
@module /components//AddReservation
@description Allow a user to book a reservation

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
import { StyleSheet, Text } from 'react-native'
import { Container, Content, DatePicker, Form, Item, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const styles = StyleSheet.create({})

const DateSelector = () => {
  return (
    <DatePicker
      defaultDate={new Date()}
      minimumDate={new Date()}
      locale={'en'}
      timeZoneOffsetInMinutes={undefined}
      modalTransparent={false}
      animationType={'fade'}
      androidMode={'default'}
      placeHolderText="Select date"
      textStyle={{ color: 'green' }}
      placeHolderTextStyle={{ color: '#d3d3d3' }}
      onDateChange={this.setDate}
      disabled={false}
    />
  )
}

// reservation = {
//   name: '',
//   hotelName: '',
//   arrivalDate: '',
//   departureDate: ''
// }

const CREATE_RESERVATION = gql`
  mutation createReservation($res: ReservationCreateInput!) {
    createReservation(data: $res) {
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`

class AddReservation extends Component {
  state = {
    chosenDate: new Date()
  }
  setDate = (newDate) => {
    this.setState({ chosenDate: newDate })
  }

  render() {
    return (
      <Container>
        <Content>
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              createReservation({ variables: { type: input.value } })
              input.value = ''
            }}
          >
            <Mutation mutation={CREATE_RESERVATION}>
              {(createReservation, { data })} => (
              <Item>
                <Input placeholder="Name" />
              </Item>
              <Item last>
                <Input placeholder="Hotel Name" />
              </Item>
              <Item>
                <DateSelector />
              </Item>
              <Item last>
                <DateSelector />
              </Item>
              )
            </Mutation>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default AddReservation
