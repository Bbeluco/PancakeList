import React from 'react';
import CreatePost from './src/feed_components/components/createPostComponent/CreatePostComponent';
import Header from './src/thoughts_components/components/header/Header';
import ListItems from './src/thoughts_components/components/ListItems/ListItems';

function App(): JSX.Element {
  return (
    <>
      {/* <Header />
      <ListItems /> */}
      <CreatePost />
    </>
  );
}

export default App;
