import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Picker } from '../../components'

class Home extends Component {
    render () {
        return (
            <View>
                <Picker />
            </View>
        )
    }
}

export default Home