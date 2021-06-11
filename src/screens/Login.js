import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import WavyBackground from '../components/WavyBackground';

import { theme } from '../config/theme';
import styles from '../styles/Login';

const LoginPaint = () => (
  <WavyBackground
    customStyles={styles.svgCurve}
    backgroundColor={theme.colors.background}
    wavyColor={theme.colors.primary}
  />
);

// https://callstack.github.io/react-native-paper/text-input-icon.html
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    icon: "eye-off",
    password: true,
    click: false
  }

  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      password: !prevState.password
    }));
  }

  _login() {
    console.log('Pressed')
    this.setState(() => ({ click: true }));

    setTimeout(() => this.setState(() => ({ click: false })), 5000);
  }

  render() {

    return (
      <>
        <LoginPaint />
        <View style={styles.container} >

          <TextInput
            style={styles.input}
            label="Usuário"
            mode={'outlined'}
            autoCompleteType={"username"}
            left={<TextInput.Icon name="account" />}
          />

          <TextInput label="Senha"
            style={styles.input}
            mode={'outlined'}
            secureTextEntry={this.state.password}
            autoCompleteType={"password"}
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name={this.state.icon} onPress={() => this._changeIcon()} />}
          />
          <Button mode="contained" compact={true} loading={this.state.click} onPress={() => this._login()}>
            {this.state.click ? null : "Acessar"}
          </Button>
        </View>
      </>
    );
  }
}


export default Login;