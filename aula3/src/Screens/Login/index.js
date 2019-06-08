import React, { Component } from 'react'
import { View, TextInput, ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { Button } from '../../components'

class Login extends Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        hasError: false
    }

    handleChange = type => text => {
        this.setState({
            [type]: text
        })
    }

    render () {
        const { email, password, isLoading } = this.state
        return (
            <Background>
                <Form>
                    <Input
                        value={email}
                        onChangeText={this.handleChange('email')}
                    />
                    <Input
                        secureTextEntry
                        value={password}
                        onChangeText={this.handleChange('password')}
                    />
                    {
                        isLoading
                        ? <ActivityIndicator size='small' color='#000' />
                        : <Button>
                            Entrar
                        </Button>
                    }
                    
                </Form>
            </Background>
        )
    }
}

const Form = styled(View)`
    padding: 20px;
    background-color: #fff;
    width: 200px;
`

const Input = styled(TextInput)`
    border-radius: 4px;
    border: 1px solid black;
    margin-bottom: 10px;
    padding: 5px;
`

const Background = styled(View)`
    background-color: #e1e1e1;
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default Login