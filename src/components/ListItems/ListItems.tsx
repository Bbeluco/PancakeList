import React from 'react';
import {View, SectionList, Text} from 'react-native';

const DATA = [
  {
    title: 'TO-DO',
    data: ['make the bed', 'cook the dinner', 'walk the dog'],
  },
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
];

function ListItems(): JSX.Element {
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
        renderItem={({item}) => (
          <View style={{padding: 10, borderColor: 'black', borderWidth: 1}}>
            <Text style={{color: 'black'}}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{color: 'blue', fontSize: 16}}>{title}</Text>
        )}
      />
    </View>
  );
}

export default ListItems;
