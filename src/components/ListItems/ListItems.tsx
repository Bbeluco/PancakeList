import React from 'react';
import {View, SectionList, Text} from 'react-native';
import InputField from '../InputField/InputField';
import ListItemsHooks from './ListItemsHooks';

function ListItems(): JSX.Element {
  const {taskList, populateTaskList} = ListItemsHooks();

  const DATA = [
    {
      title: 'TO-DO',
      data: taskList,
    },
  ];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
      }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={() => <InputField populateTaskList={populateTaskList} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{color: 'blue', fontSize: 16}}>{title}</Text>
        )}
      />
    </View>
  );
}

export default ListItems;
