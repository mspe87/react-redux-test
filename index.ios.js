/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import App from './app/containers'
import createLogger from 'redux-logger'

const logger = createLogger()

import rootReducer from './app/reducers'

const store = createStore(rootReducer, applyMiddleware(logger));

class meet extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('meet', () => meet);
