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
import { StyleSheet } from 'react-native'
import { Container, Content, DatePicker, Form, Item, Input } from 'native-base'

const styles = StyleSheet.create({})

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
          <Form>
            <Item>
              <Input placeholder="Name" />
            </Item>
            <Item last>
              <Input placeholder="Hotel Name" />
            </Item>
            <Item>
              <DatePicker
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
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
              <Text>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
            </Item>
            <Item last>
              <Input placeholder="Departure Date" />
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default AddReservation
