import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HTMLForm from './components/HTMLForm'
import ControlledForm from './components/ControlledForm'
import ReduxForm from './components/ReduxForm'
// import FinalForm from './FinalForm'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './App.css'

const Index = () => (
  <div>
    <h2>Mini-Course Overview</h2>
    <nav>
      <ol>
        <li>
          <Link to='/html-form/'>Native HTML-like Form</Link>
        </li>
        <li>
          <Link to='/controlled-form/'>Controlled Form</Link>
        </li>
        <li>
          <Link to='/redux-form/'>Redux Form</Link>
        </li>
      </ol>
    </nav>
  </div>
)

const reducers = combineReducers({ form: formReducer })

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <header className='header'>
            <span className='logo'>forms in react</span>
            <span className='title'>4 Ways to manage form state in React</span>
          </header>
          <Router>
            <div style={{ padding: 20 }}>
              <Route path='/' exact component={Index} />
              <Route path='/html-form/' component={HTMLForm} />
              <Route path='/controlled-form/' component={ControlledForm} />
              <Route path='/redux-form/' component={ReduxForm} />
              <Link to='/'>Back to Overview</Link>
            </div>
          </Router>
        </div>
      </Provider>
    )
  }
}

export default App
