import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CounterHooks from './CounterHooks';

function Counter(): JSX.Element {
  const {count, updateCount} = CounterHooks();

  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        borderWidth: 1,
        borderColor: '#16369E',
      }}>
      <TouchableOpacity
        onPress={() => updateCount('subtraction')}
        style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: 'white'}}>-</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 16, color: 'white'}}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={() => updateCount('sum')}
        style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: 'white'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
