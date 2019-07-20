import React from 'react'
import styled from 'styled-components'

const Container = props => {
  return <StyledContainer>{props.children}</StyledContainer>
}

const StyledContainer = styled.View`
  padding-top: 30px;
  background-color: #fff;
  flex: 1;
`

export default Container
