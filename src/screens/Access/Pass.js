
import React from 'react';
import { View } from 'react-native';
import { withTheme, TextInput } from 'react-native-paper';

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
                        label="Senha"
                        theme={theme}
                        style={styles.input}
                        right={<TextInput.Icon name="eye" color={theme.colors.primary} />}
                    />
                </View>

                <View>
                    <Button
                        mode={'contained'}
                        theme={theme}
                        style={styles.nextButton}
                        onPress={() => {
                        }}
                    >
                        Enviar
                    </Button>
                </View>

            </View>
        );
    }
}


export default withTheme(User);
