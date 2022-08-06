import { ChangeEvent, FormEvent, useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from "./styles";

type IProps = {
  onAddTask: (title: string) => void;
};

export function Header({ onAddTask }: IProps) {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/logo.png")} />

      <View style={styles.newTaskInput}>
        <TextInput
          style={styles.taskInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTitle}
          value={title}
        />

        <TouchableOpacity style={styles.buttonTask} onPress={() => onAddTask(title)}>
          <Image source={require("../../../assets/btnAdd.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
