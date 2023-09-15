import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import Counter from '../counter/Counter';

interface InputFieldProps {
  populateTaskList: (text: string, index: number) => void;
  indexItemList: number;
  userText: string;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <TouchableOpacity
      style={{padding: 1, flexDirection: 'row'}}
      onPress={() => console.log('apertado')}>
      <TextInput
        multiline={true}
        style={{borderWidth: 1, width: '80%'}}
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
    </TouchableOpacity>
  );
}
export default InputField;
