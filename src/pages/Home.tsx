import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';



export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    



    const task:Task  = {
      id:  new Date().getTime(),
      title : newTaskTitle,
      done: false
    }

    setTasks([...tasks,task]);
  }

  function handleToggleTaskDone(id: number) {
      const updatedTasks = tasks.map(item => ({...item}));
      
      const foundItem = updatedTasks.find(item => item.id === id);

      if(!foundItem)
        return
      
      foundItem.done = !foundItem.done;

      setTasks(updatedTasks);

  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter(item => item.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})