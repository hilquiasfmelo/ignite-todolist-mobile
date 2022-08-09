import { TouchableOpacity, View, Text, Image } from "react-native";
import { ITask } from "../../../App";
import { styles } from "./styles";

interface IProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onCompletedTask: (id: string) => void;
}

export function TaskItem({ task, onDeleteTask, onCompletedTask }: IProps) {
  return (
    <View style={styles.tasks}>
      <TouchableOpacity
        style={styles.checkContainer}
        onPress={() => onCompletedTask(task.id)}
      >
        {task.isDone ? (
          <Image style={styles.checkImg} source={require("../../../assets/check.png")} />
        ) : (
          <View style={styles.checkButton} />
        )}
      </TouchableOpacity>

      <Text style={task.isDone ? styles.taskTextCompleted : styles.titleTask}>
        {task.title}
      </Text>

      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Image
          style={styles.trash}
          source={require("../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
