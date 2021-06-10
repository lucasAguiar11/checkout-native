import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";

import Background from "../components/Background";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import WavyBackground from "../components/WavyBackground";
import { theme } from "../config/theme";

const HeaderPaint = () => (
  <WavyBackground
    customStyles={styles.svgCurve}
    backgroundColor={theme.colors.background}
    wavyColor={theme.colors.primary}
  />
);

const styles = StyleSheet.create({
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width
  }
});

export default function Login() {

  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' })

  return (
    <Background header={<HeaderPaint />}>
      {/* <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={() => console.log("teste")}>
        Acessar
      </Button> */}
    </Background>
  );
}

