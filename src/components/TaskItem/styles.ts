import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasks: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    backgroundColor: "#333333",
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 20,
    marginBottom: 8
  },
  checkContainer: {
    minWidth: 25,
    height: 25,
    marginRight: 11.27
  },
  checkButton: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    backgroundColor: "transparent",
  },
  titleTask: {
    marginRight: 'auto',
    color: '#F2F2F2',
    lineHeight: 22,
    fontSize: 16
  },
  deleteButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonIcon: {
    minWidth: 20,
    height: 20,
  }
});
