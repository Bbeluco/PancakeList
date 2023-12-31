import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

function ListItemsHooks() {
  const [taskList, setTaskList] = useMMKVStorage('lists', MMKV, ['']);

  function populateTaskList(newTask: string, indexItemList: number) {
    if (newTask === '') {
      return;
    }
    taskList[indexItemList] = newTask;
    setTaskList([...taskList]);

    if (indexItemList === taskList.length - 1) {
      setTaskList([...taskList, '']);
    }
  }

  function removeItemFromList(indexItemList: number): void {
    if (taskList[indexItemList] === '') {
      return;
    }
    taskList.splice(indexItemList, 1);
    setTaskList([...taskList]);
  }

  return {taskList, populateTaskList, removeItemFromList};
}

export default ListItemsHooks;
