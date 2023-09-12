import React from 'react';
import {TextInput, View} from 'react-native';
import Counter from '../counter/Counter';

interface InputFieldProps {
  populateTaskList: (text: string, index: number) => void;
  indexItemList: number;
}

function InputField(props: InputFieldProps): JSX.Element {
  return (
    <View style={{padding: 1, flexDirection: 'row'}}>
      <TextInput
        style={{borderWidth: 1, width: '90%'}}
        onSubmitEditing={submitAction =>
          // props.populateTaskList(
          //   submitAction.nativeEvent.text,
          //   props.indexItemList,
          // )
          console.log(submitAction.target)
        }
      />
      <Counter />
    </View>
  );
}
export default InputField;
