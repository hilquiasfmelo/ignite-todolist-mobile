import { View, Text } from "react-native";

import { styles } from "./styles";

export function Tasks() {
  return (
    <View style={styles.tasks}>
      <View style={styles.header}>
        <View style={styles.tasksCreated}>
          <Text style={styles.tasksItemCreated}>Criadas</Text>
          <Text style={styles.countTasks}>05</Text>
        </View>

        <View style={styles.tasksCreated}>
          <Text style={styles.tasksItemFinished}>Concluídas</Text>
          <Text style={styles.countTasks}>3 de 15</Text>
        </View>
      </View>
    </View>
  );
}
