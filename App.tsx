import React from 'react';
import Header from './src/thoughts_components/components/header/Header';
import ListItems from './src/thoughts_components/components/ListItems/ListItems';
import {StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: '100%',
      }}>
      <Header />
      <ListItems />
    </View>
  );
}

export default App;
