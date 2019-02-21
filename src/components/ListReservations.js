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
import { Container} from 'native-base'

const styles = StyleSheet.create({

})

class ListReservations extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Text>ListReservations</Text>
            </Container>
        )
    }
}


export default ListReservations