import { Fragment } from "react";
import { StatusBar, View } from "react-native";
import { Header } from "./src/components/Header";
import { TaskItem } from "./src/components/TaskItem";
import { Tasks } from "./src/screens/Tasks";

export default function App() {
  return (
    <Fragment>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: "#262626" }}>
        <Header />
        <Tasks />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </View>
    </Fragment>
  );
}