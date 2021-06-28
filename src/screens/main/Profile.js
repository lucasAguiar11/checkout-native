import React from 'react';
import { View } from 'react-native';
import { withTheme, Avatar, Text, Colors } from 'react-native-paper';

import { WavyHeader } from '../../components/WavyBackground';
import { styles } from '../../styles/main/Profile';
import Input from '../../components/InputNoPadding';

class Profile extends React.Component {

    constructor(prop) {
        super(prop);
    }

    state = {
        nomeCompleto: 'Lucas Aguiar Cardoso Abreu',
        email: 'lucas99.abreu@gmail.com',
        document: '48903772806'

    }

    render() {

        const theme = this.props.theme;

        return (
            <>
                <WavyHeader backgroundColor={Colors.white} />
                <View style={styles.main}>
                    <Avatar.Icon size={100} icon="account" theme={theme} style={styles.avatar} />
                    <Text style={styles.profileName}>Lucas Aguiar</Text>
                    <View style={styles.row}>
                        <Text>EC Teste</Text>
                        <Text> | </Text>
                        <Text>BanQi</Text>
                    </View>
                    <View style={styles.fields}>
                        <Input
                            label="Nome completo:"
                            value={this.state.nomeCompleto}
                            editable={false}
                        />
                        <Input
                            label="Email:"
                            value={this.state.email}
                            editable={false}
                        />
                        <Input
                            label="CPF/CNPJ:"
                            value={this.state.document}
                            editable={false}
                        />
                    </View>
                </View>
            </>
        );
    }
}


export default withTheme(Profile);