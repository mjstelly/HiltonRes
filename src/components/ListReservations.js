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
import { FlatList, StyleSheet, Text } from 'react-native'
import { Container } from 'native-base'

// import { ApolloProvider, Query } from 'react-apollo'
// import ApolloClient from 'apollo-boost'
// import gql from 'graphql-tag'

// const client = new ApolloClient({
//     uri: 'https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev'
// })

const Reservations = () => {

    return <Text>Reservation module</Text>
    // <ApolloProvider client={client}>
    //     <Query
    //         query={gql`
    //     {
    //         reservations {
    //             id
    //             name
    //             hotelName
    //             arrivalDate
    //             departureDate
    //         }
    //     }
    // `}>
    //         {({ loading, error, data }) => {
    //             if (loading) return <Text>Loading...</Text>;
    //             if (error) return <Text>Error :(</Text>;

    //             return data.reservations.map(({ id, name, hotelName }) => (
    //                 <View key={id}>
    //                     <Text>{name}: {hotelName}</Text>
    //                 </View>
    //             ));
    //         }}
    //     </Query>
    // </ApolloProvider>
}

class ListReservations extends Component {

    render() {
        return (
            <Container>
                <Text>List Reservations</Text>
                {/* {this.Reservations} */}
                <ApolloProvider client={client}>
                    <Query
                        query={gql`
        {
            reservations {
                id
                name
                hotelName
                arrivalDate
                departureDate
            }
        }
    `}>
                        {({ loading, error, data }) => {
                            if (loading) return <Text>Loading...</Text>;
                            if (error) return <Text>Error :(</Text>;

                            // return data.reservations.map(({ id, name, hotelName }) => (
                            //     <View key={id}>
                            //         <Text>{name}: {hotelName}</Text>
                            //     </View>
                            // ));
                        }}
                    </Query>
                </ApolloProvider>
            </Container>
        )
    }
}


export default ListReservations