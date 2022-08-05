import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    padding: 70,
    position: "relative",
  },
  newTaskInput: {
    width: 350,
    flexDirection: "row",
    position: "absolute",
    height: 54,
    justifyContent: "center",
    bottom: -54 / 2,
  },
  taskInput: {
    flex: 1,
    height: 56,
    backgroundColor: "#333333",
    color: "#FCFCFC",
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    marginRight: 4,
  },
  buttonTask: {
    width: 56,
    height: 56,
    backgroundColor: "#1E6F9F",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
