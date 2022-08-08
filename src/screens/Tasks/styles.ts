import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasks: {
    marginTop: 32,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  tasksCreated: {
    flexDirection: "row",
    alignItems: "center",
  },
  tasksItemCreated: {
    marginRight: 8,
    color: "#4EA8DE",
    alignItems: "center",
    justifyContent: "center",
  },
  tasksItemFinished: {
    marginRight: 8,
    color: "#8284FA",
  },
  countTasks: {
    color: "#D9D9D9",
    fontSize: 14,
    borderRadius: 999,
    backgroundColor: "#333333",
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  taskItem: {
    marginTop: 30,
    marginBottom: 8,
  },
  emptyContainer: {
    alignItems: 'center',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    marginHorizontal: 20,
  },
  emptyImg: {
    marginTop: 48,
    marginBottom: 16
  },
  emptyText: {
    lineHeight: 50,
    alignItems: 'center',
  },
  emptyTextBold: {
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyTextNormal: {
    fontWeight: '400',
    color: '#808080',
    fontSize: 14
  }
});
