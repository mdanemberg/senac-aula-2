import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './Pages/Login'
import Home from './Pages/Home'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route component={Login} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
