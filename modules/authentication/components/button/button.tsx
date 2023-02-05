import { Text, TouchableOpacity } from "react-native";
import { buttonStyles } from "./styles";

interface LoginButtonProps {
  title: string;
}

export const LoginButton = ({ title }: LoginButtonProps) => (
  <TouchableOpacity style={buttonStyles.button}>
    <Text style={buttonStyles.text}>{title}</Text>
  </TouchableOpacity>
);
