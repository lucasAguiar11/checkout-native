
import React from 'react';
import { View } from 'react-native';
import { withTheme, HelperText } from 'react-native-paper';

import { styles } from '../../styles/access/User';
import Button from '../../components/Button';
import Input from '../../components/InputNoPadding';

class User extends React.Component {
    constructor(props) {
        super(props);
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
                    />
                    <HelperText
                        type="info"
                        padding='none'
                    >
                        Insira seu nome de usuário para ter acesso ao app e suas funcionalidades.
                    </HelperText>
                </View>

                <View>
                    <Button
                        mode={'contained'}
                        theme={theme}
                        style={styles.nextButton}
                        onPress={() => {
                            this.props.navigation.navigate('Pass')
                        }}
                    >
                        Próximo
                    </Button>
                </View>

            </View>
        );
    }
}


export default withTheme(User);
