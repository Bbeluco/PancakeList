import React from 'react';
import {TextInput, View} from 'react-native';

function InputNewPost(): JSX.Element {
  return (
    <View>
      <TextInput
        placeholder="O que deseja recordar?"
        style={{borderColor: 'black', borderWidth: 1, margin: 10}}
      />
    </View>
  );
}

export default InputNewPost;
