import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const Button = ({children, ...props}) => {
  if (props.size === 'large') {

  }
  return (
    <StyledButton {...props}>
      <StyledText>
        {children}
      </StyledText>
    </StyledButton>
  )
}

const StyledButton = styled.TouchableOpacity`
    background-color: #fff;
`

const StyledText = styled(Text)`
    text-align: center;
`

export default Button
