import {useState} from 'react';

function ListItemsHooks() {
  const [taskList, setTaskList] = useState(['']);

  function populateTaskList(newTask: string, indexItemList: number): void {
    if (indexItemList === taskList.length - 1) {
      setTaskList([...taskList, newTask]);
    } else {
      //TODO: The current array taskList starts with [""] object, this is why I added indexItemList + 1 to edit
      //I belive it is convenient to correct this point, so the application counts correctly
      taskList[indexItemList + 1] = newTask;
      setTaskList([...taskList]);
    }
  }

  return {taskList, populateTaskList};
}

export default ListItemsHooks;
