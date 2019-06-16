import React, { Component } from 'react'
import { View, TextInput, ActivityIndicator, Text } from 'react-native'
import styled from 'styled-components'
import { Button } from '../../components'
import { login } from '../../services/auth'
import { setToken, getToken } from '../../helpers/auth'

class Login extends Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        hasError: false
    }

    async componentDidMount () {
        const token = await getToken()
        if (token) {
            this.props.navigation.navigate('Internal')
        }
    }

    handleChange = type => text => {
        this.setState({
            [type]: text
        })
    }

    handleLogin = async() => {
        const { email, password } = this.state
        this.setState({
            isLoading: true
        })
        try {
            const response = await login({email, password })
            await setToken(response.data.token)
            console.log(response.data.token)
            this.props.navigation.navigate('Internal')
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false
            })
            alert('Credenciais inválidas')
        }
    }

    render () {
        const { email, password, isLoading } = this.state
        return (
            <Background>
                <Form>
                    <Title>Login</Title>
                    <Input
                        placeholder='Email'
                        autoCapitalize='none'
                        value={email}
                        keyboardType='email-address'
                        onChangeText={this.handleChange('email')}
                    />
                    <Input
                        placeholder='Password'
                        autoCapitalize='none'
                        secureTextEntry
                        value={password}
                        onChangeText={this.handleChange('password')}
                    />
                    {
                        isLoading
                        ? <ActivityIndicator size='small' color='#000' />
                        : <Button onPress={this.handleLogin}>
                            Entrar
                        </Button>
                    }
                    
                </Form>
            </Background>
        )
    }
}

const Title = styled(Text)`
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
`

const Form = styled(View)`
    padding: 20px;
    background-color: #fff;
    width: 200px;
    border-radius: 4px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
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