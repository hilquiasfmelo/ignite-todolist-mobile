import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasks: {
    // width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#333333",
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 8,
  },
  checkContainer: {
    minWidth: 20,
    height: 20,
  },
  checkButton: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#4EA8DE",
    backgroundColor: "transparent",
  },
  titleTask: {
    fontSize: 14,
    lineHeight: 22,
    color: '#f2f2f2',
    alignItems: 'flex-start'
  },
});
