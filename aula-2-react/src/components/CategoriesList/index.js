import React, { Component } from 'react'
import { getCategories } from '../../services/category'

class CategoriesList extends Component {
    state = {
        isLoading: true,
        hasError: false,
        data: []
    }
  async componentDidMount () {
    try {
        const response = await getCategories()
        this.setState({
            isLoading: false,
            data: response.data
        })
    } catch (error) {
        this.setState({
            isLoading: false,
            hasError: true
        })
    }
  }

  render () {
      const { data, isLoading, hasError } = this.state

    if (hasError) {
        return <span>DEU RUIM</span>
    }
    if (isLoading) {
        return <span>Carregando...</span>
    }
    return (
      <div>
          <ul>
              {
                  data.map(item => {
                    return (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )
                  })
              }
        </ul>
      </div>
    )
  }
}

export default CategoriesList
