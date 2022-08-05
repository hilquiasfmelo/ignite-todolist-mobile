import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";

export function TaskItem() {
  return (
    <View style={styles.tasks}>
      <TouchableOpacity style={styles.checkContainer}>
        <View style={styles.checkButton} />
      </TouchableOpacity>

      <Text style={styles.titleTask}>Comprar limão</Text>

      <TouchableOpacity  style={styles.deleteButton} >
        <Image style={styles.deleteButtonIcon} source={require('../../../assets/trash.png')}  />
      </TouchableOpacity>
    </View>
  )
}