import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../../services/category'
import { saveCategories } from '../../redux/modules/category'

class CategoriesList extends Component {
    state = {
        isLoading: true,
        hasError: false
    }
  async componentDidMount () {
    try {
        const response = await getCategories()
        this.setState({
            isLoading: false
        })
        this.props.saveCategories(response.data)
    } catch (error) {
        this.setState({
            isLoading: false,
            hasError: true
        })
    }
  }

  render () {
      const { isLoading, hasError } = this.state
      const { categories } = this.props
      console.log(categories)

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
                  categories.map(item => {
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

const mapStateToProps = state => {
    return {
        categories: state.categories.data
    }
}

const mapDispatchToProps = {
    saveCategories
}


export default
connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
