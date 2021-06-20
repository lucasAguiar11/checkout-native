
import React from 'react';
import { View } from 'react-native';
import { withTheme, TextInput, HelperText } from 'react-native-paper';

import { styles } from '../../styles/access/User';
import Button from '../../components/Button';
import Input from '../../components/InputNoPadding';

import { textValidator } from '../../helpers/Validation';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: "eye-off",
            showPass: true,
            click: false,
            password: { value: '', error: '' }
        }
    }

    changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            showPass: !prevState.showPass
        }));
    }

    sendLogin() {
        this.setState(() => ({ click: true }));
        const passError = textValidator(this.state.password.value, 'senha');

        if (passError) {
            this.setState((prevState) => (
                {
                    password: { ...prevState.password, error: passError },
                    click: false
                }));

            return;
        }
    }

    render() {
        const theme = this.props.theme;
        return (
            <View style={styles.container}>

                <View>
                    <Input
                        label="Senha"
                        theme={theme}
                        style={styles.input}
                        secureTextEntry={this.state.showPass}
                        right={<TextInput.Icon name="eye" color={theme.colors.primary} onPress={() => this.changeIcon()} />}
                        value={this.state.password.value}
                        error={!!this.state.password.error}
                        errorText={this.state.password.error}
                        onChangeText={(text) => this.setState({ password: { value: text, error: '' } })}
                    />
                    <HelperText
                        type="info"
                        padding='none'
                    >
                        Preencha sua senha. Cuidado com as letras maiúsculas e minúsculas.
                    </HelperText>
                </View>

                <View>
                    <Button
                        mode={'contained'}
                        theme={theme}
                        loading={this.state.click}
                        style={styles.nextButton}
                        onPress={() => this.sendLogin()}
                    >
                        {this.state.click ? null : "Enviar"}
                    </Button>
                </View>

            </View>
        );
    }
}


export default withTheme(User);
