import { FC } from "react";
import { Text, TextInput, View } from "react-native";
import { Spacer } from "../spacer/spacer";
import { textInputStyles } from "./styles";

interface TextInputProps {
  label: string;
  handleInput: (text: string) => void;
  type?: "text" | "email" | "password";
  placeholder?: string;
}

export const TextInputComponent: FC<TextInputProps> = ({
  label,
  handleInput,
  type = "text",
  placeholder,
}) => (
  <>
    <Text style={textInputStyles.label}>{label}</Text>
    <Spacer size={5} />
    <View style={textInputStyles.inputContainer}>
      <TextInput
        style={textInputStyles.input}
        onChangeText={handleInput}
        placeholder={placeholder}
        placeholderTextColor="#CFCFCF"
      />
    </View>
  </>
);
