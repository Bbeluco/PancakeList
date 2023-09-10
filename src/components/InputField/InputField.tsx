import React from 'react';
import {TextInput, View} from 'react-native';

interface InputFieldProps {
  populateTaskList: (text: string) => void;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <View style={{padding: 1}}>
      <TextInput
        style={{borderWidth: 1}}
        onChangeText={newTask => onChangeText(props.populateTaskList, newTask)}
      />
    </View>
  );
}

function onChangeText(
  populateTaskList: (text: string) => void,
  newTask: string,
): void {
  populateTaskList(newTask);
}

export default InputField;
