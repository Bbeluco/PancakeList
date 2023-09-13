import {useEffect} from 'react';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

function ListItemsHooks() {
  const [taskList, setTaskList] = useMMKVStorage('lists', MMKV, ['']);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  function populateTaskList(newTask: string, indexItemList: number) {
    taskList[indexItemList] = newTask;
    setTaskList([...taskList]);

    if (indexItemList === taskList.length - 1) {
      setTaskList([...taskList, '']);
    }
  }

  return {taskList, populateTaskList};
}

export default ListItemsHooks;
