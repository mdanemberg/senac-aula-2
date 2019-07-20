import React from 'react'
import styled from 'styled-components'
import Text from './Text'

const Card = props => {
  return (
    <StyledCard onPress={props.onPress}>
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSivf_S6Mn0tsdO6pRZJAOW6kh9VmUiJO_jZk75NjcjKEkr-EEpWw'
        }}
      />
      <Row>
        <Column>
          <Row justify='space-between' align='flex-start'>
            <Column>
              <Text style={{ width: 200 }} weight='500'>
                {props.title}
              </Text>
            </Column>
            <Column>
              <StarContainer>
                {/* <Text>{props.stars}</Text> */}
                <StarImage
                  source={{
                    uri:
                      'data:image/png;base64,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'
                  }}
                />
              </StarContainer>
            </Column>
          </Row>
          <Row>
            <Text>{props.description}</Text>
          </Row>
        </Column>
      </Row>
    </StyledCard>
  )
}

const StyledCard = styled.TouchableOpacity`
  background-color: #fff;
  box-shadow: 6px 4px 8px #979797;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: 20px;
`

const StarImage = styled.Image`
  height: 24px;
  width: 24px;
  margin-left: 10px;
`

const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  overflow: hidden;
  margin-right: 20px;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  flex: 1;
`

const Column = styled.View``

export default Card
