import React from 'react'
// import Root from 'App/Root'
import Pages from './Pages'
import { Router, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class App extends React.Component {

  render () {
    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          {Pages}
        </Router>
      </MuiThemeProvider>
    )
  }
}
