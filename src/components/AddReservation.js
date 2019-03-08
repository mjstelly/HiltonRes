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
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import {
  Button,
  Container,
  Content,
  DatePicker,
  Form,
  Input,
  Item
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
                // onSubmit={() => {
                //   createReservation({ data })
                //   Alert.alert('onSubmit')
                // }}
                onSubmit={(values) => {
                  // setSubmitting(false)
                  return console.log(values)
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
                    <Form>
                      <Item
                        onChangeText={props.handleChange('name')}
                        onBlur={props.handleBlur('name')}
                      >
                        <Input placeholder="Enter Name" />
                      </Item>
                      <Item
                        onChangeText={props.handleChange('hotelName')}
                        onBlur={props.handleBlur('hotelName')}
                      >
                        <Input placeholder="Enter Hotel Name" />
                      </Item>
                      <DateSelector />
                      <DateSelector />
                      <Button full primary onPress={props.handleSubmit}>
                        {/* <Button full primary onPress={() => console.log(props)}> */}
                        <Text>Submit</Text>
                      </Button>
                    </Form>
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
