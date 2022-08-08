import { View, Text, Image } from "react-native";
import { ITask } from "../../../App";
import { TaskItem } from "../../components/TaskItem";

import { styles } from "./styles";

interface IProps {
  tasks: ITask[];
}

export function Tasks({ tasks }: IProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <View style={styles.tasks}>
      <View style={styles.header}>
        <View style={styles.tasksCreated}>
          <Text style={styles.tasksItemCreated}>Criadas</Text>
          <Text style={styles.countTasks}>{tasksQuantity}</Text>
        </View>

        <View style={styles.tasksCreated}>
          <Text style={styles.tasksItemFinished}>Concluídas</Text>
          <Text style={styles.countTasks}>
            {completedTasks} de {tasksQuantity}
          </Text>
        </View>
      </View>

      <View style={styles.taskItem}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </View>

      <View>
        {tasks.length <= 0 && (
          <View style={styles.emptyContainer}>
            <Image
              style={styles.emptyImg}
              source={require("../../../assets/empty.png")}
            />
            <View style={styles.emptyText}>
              <Text style={styles.emptyTextBold}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.emptyTextNormal}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
