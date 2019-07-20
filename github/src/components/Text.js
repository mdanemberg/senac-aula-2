import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'

const StyledText = styled(props => <Text numberOfLines={1} {...props} />)`
  color: black;
  font-weight: ${({ weight }) => weight || 'normal'};
  font-size: 16px;
`

export default StyledText
