import React from 'react';
import {TextInput, View} from 'react-native';

interface InputFieldProps {
  populateTaskList: (text: string, index: number) => void;
  indexItemList: number;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <View style={{padding: 1}}>
      <TextInput
        style={{borderWidth: 1}}
        onSubmitEditing={submitAction =>
          props.populateTaskList(
            submitAction.nativeEvent.text,
            props.indexItemList,
          )
        }
      />
    </View>
  );
}
export default InputField;
