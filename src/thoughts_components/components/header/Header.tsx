import React from 'react';
import {View, Text} from 'react-native';

function Header(): JSX.Element {
  return (
    <View style={{justifyContent: 'top', alignItems: 'center'}}>
      <Text style={{fontSize: 24, color: 'white'}}>Pancake's List 🥞</Text>
    </View>
  );
}

export default Header;
