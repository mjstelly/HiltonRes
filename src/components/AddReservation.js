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
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import {
  // Button,
  Container,
  Content,
  DatePicker
  // Form,
  // Input,
  // Item
} from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Formik } from 'formik'
import * as yup from 'yup'

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
const reservationSchema = yup.object().shape({
  name: yup.string().required('Guest name required'),
  hotelName: yup.string().required('Hotel Name is required'),
  arrivalDate: yup
    .date()
    .required('Arrival Date is required')
    .default(function() {
      return new Date()
    }),
  departureDate: yup
    .date()
    .required('Departure Date is required')
    .default(function() {
      return new Date()
    })
})

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
                validationSchema={reservationSchema}
                onSubmit={(data) => {
                  // createReservation({ data })
                  console.log(data)
                }}
                initialValues={{
                  name: '',
                  hotelName: '',
                  arrivalDate: '',
                  departureDate: ''
                }}
              >
                {(props) => {
                  return (
                    <View>
                      <TextInput
                        onChangeText={props.handleChange('name')}
                        onBlur={props.handleBlur('name')}
                        placeholder="Enter Name"
                      />
                      <TextInput
                        placeholder="Enter Hotel Name"
                        onChangeText={props.handleChange('hotelName')}
                        onBlur={props.handleBlur('hotelName')}
                      />
                      <DateSelector />
                      <DateSelector />
                      <Button title="Submit" onPress={props.handleSubmit} />
                    </View>
                  )
                }}
              </Formik>
            )}
          </Mutation>
        </Content>
      </Container>
    )
  }
}

export default AddReservation
