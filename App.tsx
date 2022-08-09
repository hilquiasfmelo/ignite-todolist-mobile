import { Fragment, useState } from "react";
import { Alert, StatusBar, View } from "react-native";
import uuid from "react-native-uuid";
import { Header } from "./src/components/Header";
import { Tasks } from "./src/screens/Tasks";

export type ITask = {
  id: string;
  title: string;
  isDone: boolean;
};

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(title: string) {
    setTasks([
      ...tasks,
      {
        id: String(uuid.v4()),
        title,
        isDone: false,
      },
    ]);
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    Alert.alert("Remover Tarefa", "Deseja realmente excluir a tarefa?", [
      {
        text: "SIM",
        onPress: () => setTasks(newTasks),
      },
      {
        text: "NÃO",
        style: "cancel",
      },
    ]);
  }

  function toggleTaskCompleted(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <Fragment>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: "#262626" }}>
        <Header onAddTask={addTask} />
        <Tasks
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCompletedTask={toggleTaskCompleted}
        />
      </View>
    </Fragment>
  );
}
