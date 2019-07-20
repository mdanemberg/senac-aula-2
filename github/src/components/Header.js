import React from 'react'
import styled from 'styled-components'

const Header = props => {
  return (
    <Container>
      <Left />
      <TitleContainer>
        <Title>{props.title}</Title>
      </TitleContainer>
      <Right />
    </Container>
  )
}

const Container = styled.View`
  flex-direction: row;
  padding-vertical: 40px;
  padding-horizontal: 20px;
  justify-content: space-between;
`

const Left = styled.TouchableOpacity`
  width: 40px;
`

const Right = styled.TouchableOpacity`
  width: 40px;
`

const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  color: black;
  text-align: center;
`

export default Header
