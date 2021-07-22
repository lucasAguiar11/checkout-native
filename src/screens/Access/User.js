
import React from 'react';
import { View } from 'react-native';
import { withTheme, HelperText } from 'react-native-paper';

import { styles } from '../../styles/access/User';
import Button from '../../components/Button';
import Input from '../../components/InputNoPadding';

import { textValidator } from '../../helpers/Validation';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: { value: '', error: '' },
        }
    }

    nextScreen() {

        const usernameError = textValidator(this.state.username.value, 'usuário');

        if (usernameError) {
            this.setState((prevState) => ({
                username: { ...prevState.username, error: usernameError }
            }));
            return;
        }

        this.props.navigation.navigate('Pass');
    }

    render() {
        const theme = this.props.theme;
        return (
            <View style={styles.container}>

                <View>
                    <Input
                        label="E-mail ou nome de usuário"
                        theme={theme}
                        style={styles.input}
                        returnKeyType="next"
                        value={this.state.username.value}
                        error={!!this.state.username.error}
                        errorText={this.state.username.error}
                        onChangeText={(text) => this.setState({ username: { value: text, error: '' } })}

                    />
                    <HelperText
                        type="info"
                        padding='none'
                        theme={theme}
                    >
                        Insira seu nome de usuário para ter acesso ao app e suas funcionalidades.
                    </HelperText>
                </View>

                <View>
                    <Button
                        mode={'contained'}
                        theme={theme}
                        style={styles.nextButton}
                        onPress={() => this.nextScreen()}
                    >
                        Próximo
                    </Button>
                </View>

            </View>
        );
    }
}


export default withTheme(User);
