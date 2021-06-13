import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Title, Button, withTheme } from 'react-native-paper';
import { textValidator } from '../helpers/Validation';
import Input from '../components/Input'
import WavyBackground from '../components/WavyBackground';

import { theme } from '../config/theme';
import styles from '../styles/Login';

const LoginPaint = () => (
  <WavyBackground
    customStyles={styles.svgCurve}
    backgroundColor={'#ffffff'}
    wavyColor={theme.colors.primary}
  />
);


const LoginContainer = ({ children }) =>
(
  <>
    <LoginPaint />
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.headerContainer}>
        <Title style={styles.titleText} >Bem vindo!</Title>
        <Title style={styles.subtitleText} >Acesse seu App de Checkout</Title>
      </View>
      <View style={styles.container} >
        {children}
      </View>
    </KeyboardAwareScrollView>
  </>
);


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: "eye-off",
      showPass: true,
      click: false,
      username: { value: '', error: '' },
      password: { value: '', error: '' }
    }
  }

  _changeIcon() {
    this.setState(prevState => ({
      icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
      showPass: !prevState.showPass
    }));
  }

  _login() {

    this.props.navigation.navigate('Checkout');


    console.log('Pressed')
    this.setState(() => ({ click: true }));

    console.log(this.state)
    const usernameError = textValidator(this.state.username.value, 'usuário');
    const passError = textValidator(this.state.password.value, 'senha');

    if (usernameError || passError) {
      this.setState((prevState) => (
        {
          username: { ...prevState.username, error: usernameError },
          password: { ...prevState.password, error: passError },
          click: false
        }));

      console.log("Validation Error", usernameError, passError);
      return;
    }

    //Send request
    setTimeout(() => this.setState(() => ({ click: false })), 1000);
  }

  render() {

    const theme = this.props.theme;

    return (
      <LoginContainer>
        <Input
          style={styles.input}
          label="Usuário"
          mode={'flat'}
          autoCompleteType={"username"}
          leftIcon={"account"}
          theme={theme}
          returnKeyType="next"
          value={this.state.username.value}
          error={!!this.state.username.error}
          errorText={this.state.username.error}
          onChangeText={(text) => this.setState({ username: { value: text, error: '' } })}
        />
        <Input label="Senha"
          style={styles.input}
          mode={'flat'}
          secureTextEntry={this.state.showPass}
          autoCompleteType={"password"}
          leftIcon={'lock'}
          rightIcon={this.state.icon}
          rightIconClick={() => this._changeIcon()}
          theme={theme}
          value={this.state.password.value}
          error={!!this.state.password.error}
          errorText={this.state.password.error}
          onChangeText={(text) => this.setState({ password: { value: text, error: '' } })}
        />
        <Button mode="contained"
          compact={true}
          loading={this.state.click}
          onPress={() => this._login()}
          theme={theme}
          style={styles.button}
        >
          {this.state.click ? null : "Acessar"}
        </Button>
        <Button
          mode={'text'}
          onPress={() => console.log("teste")}
          uppercase={false}
          theme={theme}
          style={styles.forgotPassword}
        >
          Esqueceu a senha?
        </Button>
      </LoginContainer>

    );
  }
}


export default withTheme(Login);

