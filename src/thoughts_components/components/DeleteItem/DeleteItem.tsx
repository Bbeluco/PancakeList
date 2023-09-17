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
        borderColor: 'green',
        borderWidth: 1,
      }}>
      <TouchableOpacity
        onPress={() => props.removeItemFromList(props.indexItemList)}
        style={{justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeleteItem;
