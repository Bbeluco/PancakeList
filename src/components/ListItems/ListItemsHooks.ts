import {useState} from 'react';

function ListItemsHooks() {
  const [taskList, setTaskList] = useState(['']);

  function populateTaskList(newTask: string): void {
    setTaskList([...taskList, newTask]);
  }

  return {taskList, populateTaskList};
}

export default ListItemsHooks;
