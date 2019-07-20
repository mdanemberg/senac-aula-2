import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'

export default class Form extends Component {
  componentDidMount () {
    // 'form/:id'
    if (this.props.navigation.params.id) {
      const data = json.find(item => item.id === id)
      this.setState({
        ...data
      })
    }
  }

  handleSubmit = () => {
    
  }

  render () {
    return (
      <View>
        <TextInput name='name' />
        <TextInput name='phone' />
        <TextInput name='email' />
        <Button onPress={this.handleSubmit} title='enviar' />
      </View>
    )
  }
}
