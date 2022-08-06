import { TouchableOpacity, View, Text, Image } from "react-native";
import { ITask } from "../../../App";
import { styles } from "./styles";

interface IProps {
  task: ITask;
}

export function TaskItem({ task }: IProps) {
  return (
    <View style={styles.tasks}>
      <TouchableOpacity style={styles.checkContainer}>
        <View style={styles.checkButton} />
      </TouchableOpacity>

      <Text style={styles.titleTask}>{task.title}</Text>

      <TouchableOpacity>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
