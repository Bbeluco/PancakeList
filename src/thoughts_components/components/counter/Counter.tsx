import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CounterHooks from './CounterHooks';

function Counter(): JSX.Element {
  const {count, updateCount} = CounterHooks();

  return (
    <View
      style={{
        flexDirection: 'row-reverse',
        borderColor: 'red',
        borderWidth: 1,
      }}>
      <TouchableOpacity
        onPress={() => updateCount('sum')}
        style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>+</Text>
      </TouchableOpacity>
      <View style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 16}}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={() => updateCount('subtraction')}
        style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>-</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Counter;
