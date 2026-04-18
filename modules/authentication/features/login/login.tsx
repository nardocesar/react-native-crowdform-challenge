import { FC, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Spacer, TextInputComponent } from "../../../../components";
import { LoginButton } from "../../components";
import { loginStyle } from "../../style";

export const LoginScreen: FC = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Text style={loginStyle.title}>Login</Text>
      <Spacer size={34} />
      <TextInputComponent label="E-mail" handleInput={setEmail} />
      <Spacer size={20} />
      <TextInputComponent
        label="Password"
        handleInput={setEmail}
        placeholder="Minimum 8 characters"
      />
      <Spacer size={37} />
      <LoginButton title="Login" />
      <Spacer size={13} />
      <Text style={loginStyle.secondaryAction}>
        Don't have an account?{" "}
        <TouchableOpacity
          style={{ textDecoration: "underline" }}
          onPress={() => console.log("click")}
        >
          Sign up
        </TouchableOpacity>{" "}
        here
      </Text>
    </>
  );
};
