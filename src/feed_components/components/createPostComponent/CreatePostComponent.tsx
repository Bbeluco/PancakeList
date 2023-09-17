import React from 'react';
import {View} from 'react-native';
import ButtonUploadMedia from '../buttonUploadMedia/ButtonUploadMedia';
import InputNewPost from '../inputNewPost/InputNewPost';
import RequestPermission from '../requestPermission/RequestPermission';

function CreatePost(): JSX.Element {
  return (
    <View>
      {/* We'll click on some button and this page will render */}
      <InputNewPost />
      <ButtonUploadMedia />
      <RequestPermission />
    </View>
  );
}

export default CreatePost;
