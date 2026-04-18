import { StyleSheet } from "react-native";

export const textInputStyles = StyleSheet.create({
  label: {
    fontSize: 11,
    fontWeight: "500",
    color: "#A0A0A0",
  },
  input: {
    fontFamily: "Sora",
    fontSize: 14,
    color: "black",
    flex: 1,
    outlineWidth: 0,
  },
  inputContainer: {
    height: 48,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: "#F4F4F4",
    borderRadius: 4,
  },
});
