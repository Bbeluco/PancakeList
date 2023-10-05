import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface InputFieldProps {
  removeItemFromList: (index: number) => void;
  indexItemList: number;
}

function DeleteItem(props: InputFieldProps): JSX.Element {
  return (
    <View
      style={{
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#16369E',
      }}>
      <TouchableOpacity
        onPress={() => props.removeItemFromList(props.indexItemList)}
        style={{justifyContent: 'center', padding: '8%'}}>
        <Text style={{fontSize: 20, color: 'white'}}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeleteItem;
