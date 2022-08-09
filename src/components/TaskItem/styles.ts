import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333333",
    borderRadius: 8,
    padding: 16,
    width: 375,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  checkContainer: {
    minWidth: 23,
    height: 23,
  },
  checkButton: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
  },
  checkImg: {
    minWidth: 23,
    height: 23,
  },
  titleTask: {
    fontSize: 14,
    lineHeight: 22,
    color: "#f2f2f2",
    marginRight: "auto",
    marginLeft: 8,
  },
  taskTextCompleted: {
    textDecorationLine: "line-through",
    color: "#808080",
    fontSize: 14,
    marginRight: "auto",
    marginLeft: 8,
  },
  trash: {
    padding: 10,
  },
});
