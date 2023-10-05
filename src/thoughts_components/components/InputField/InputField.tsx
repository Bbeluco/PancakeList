import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Counter from '../counter/Counter';
import DeleteItem from '../DeleteItem/DeleteItem';

interface InputFieldProps {
  populateTaskList: (text: string, index: number) => void;
  removeItemFromList: (index: number) => void;
  indexItemList: number;
  userText: string;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <View style={{padding: 1, flexDirection: 'row'}}>
      <TextInput
        style={{
          borderWidth: 1,
          width: '85%',
          backgroundColor: '#16369E',
          color: 'white',
        }}
        onSubmitEditing={submitAction =>
          props.populateTaskList(
            submitAction.nativeEvent.text,
            props.indexItemList,
          )
        }
        editable={true}
        defaultValue={props.userText}
      />
      <Counter />
      <DeleteItem
        indexItemList={props.indexItemList}
        removeItemFromList={props.removeItemFromList}
      />
    </View>
  );
}
export default InputField;
