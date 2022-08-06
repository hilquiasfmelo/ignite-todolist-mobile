import { Fragment, useState } from "react";
import {v4} from 'uuid';
import { StatusBar, View } from "react-native";
import { Header } from "./src/components/Header";
import { Tasks } from "./src/screens/Tasks";

export type ITask = {
  id: string;
  title: string;
  isDone: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function addTask(title: string) {
    setTasks([...tasks, {
      id: '1',
      title,
      isDone: false
    }])
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
        <Tasks tasks={tasks} />
      </View>
    </Fragment>
  );
}