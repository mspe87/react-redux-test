import {connect} from 'react-redux'
import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props);
  }
  render() {
    return (
      <View>
        <Text>test</Text>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    api: state.apiKeyReducer
  }
}

export default connect(mapStateToProps)(App)
