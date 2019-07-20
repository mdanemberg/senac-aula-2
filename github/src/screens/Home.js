import React from 'react'
import { FlatList, ActivityIndicator } from 'react-native'
import styled from 'styled-components'

import { Header, Container, Card } from '../components'
import github from '../services'

const Home = props => {
  const [searchBy, setSearchBy] = React.useState('')
  const [isLoading, setIsloading] = React.useState(false)
  const [repos, setRepos] = React.useState([])

  React.useEffect(
    () => {
      console.log(props)
      if (searchBy.length > 4) {
        listRepos()
      }
    },
    [searchBy]
  )

  const listRepos = async () => {
    setIsloading(true)
    const repos = await github.getRepos(searchBy)
    setIsloading(false)
    setRepos(repos.data)
  }
  return (
    <Container>
      <Header title='Buscar repositórios' />
      <ListContainer>
        <InputContainer>
          <Input
            value={searchBy}
            onChangeText={setSearchBy}
            placeholder='usuario/repositorio'
          />
        </InputContainer>
        {isLoading ? (
          <ActivityIndicator color='#000' size='large' />
        ) : (
          <FlatList
            contentContainerStyle={{
              padding: 20
            }}
            data={repos}
            renderItem={({ item }) => {
              return (
                <Card
                  onPress={() => props.navigation.push('Repository')}
                  title={item.full_name}
                  description={item.description}
                  stars={item.stargazers_count}
                />
              )
            }}
          />
        )}
      </ListContainer>
    </Container>
  )
}

const InputContainer = styled.View`
  padding-horizontal: 20px;
`

const Input = styled.TextInput`
  border-radius: 4px;
  border: 1px solid #7f7f7f;
  padding: 10px;
`
const ListContainer = styled.View`
  flex: 1;
`

export default Home
