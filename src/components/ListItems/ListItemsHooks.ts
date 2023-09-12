import {useEffect} from 'react';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

function ListItemsHooks() {
  const [taskList, setTaskList] = useMMKVStorage('lists', MMKV, ['']);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  function populateTaskList(newTask: string, indexItemList: number) {
    if (indexItemList === 0 && taskList.length === 1) {
      setTaskList([newTask]);
    } else {
      taskList[indexItemList] = newTask;
      setTaskList([...taskList]);
    }
  }

  return {taskList, populateTaskList};
}

export default ListItemsHooks;
