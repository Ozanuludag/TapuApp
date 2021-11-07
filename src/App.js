import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import reducers from './redux/reducers';
import initialState from './redux/store';

const store = createStore(reducers, initialState);


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Navigation />
      </Provider>
    )
  }
}
