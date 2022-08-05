import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo.png")} />

      <View style={styles.newTaskInput}>
        <TextInput
          style={styles.taskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.buttonTask}>
          <Image source={require("../../../assets/btnAdd.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
