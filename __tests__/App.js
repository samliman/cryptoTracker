import React, { Component } from 'react';
import { View } 'react-native';
import { Provider } from 'react-redux';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

import Store from './src/Store';
import { Header } from './src/components';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

export default class App extends Component {
  render() {
    return (
      <Provider store ={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}