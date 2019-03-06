/*
@module /components/AddReservation
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
import { Button, Container, Content, DatePicker, Item } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Formik } from 'formik'

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
          <Mutation mutation={CREATE_RESERVATION}>
            {(createReservation, { data }) => (
              <Formik
                onSubmit={(e) => {
                  e.preventDefault()
                  createReservation({ data })
                }}
                initialValues={{
                  name: '',
                  hotelName: '',
                  arrivalDate: '',
                  departureDate: ''
                }}
              >
                {(props) => (
                  <Form>
                    <Item
                      name="name"
                      onChangeText={props.handleChange('name')}
                      onBlur={props.handleBlur('name')}
                    >
                      <Input placeholder="Name" />
                    </Item>
                    <Item
                      onChangeText={props.handleChange('name')}
                      onBlur={props.handleBlur('name')}
                    >
                      <Input placeholder="Hotel Name" />
                    </Item>
                    <Item>
                      <DateSelector />
                    </Item>
                    <Item>
                      <DateSelector />
                    </Item>
                    <Button full primary>
                      <Text>Submit</Text>
                    </Button>
                  </Form>
                )}
              </Formik>
            )}
          </Mutation>
        </Content>
      </Container>
    )
  }
}

export default AddReservation
