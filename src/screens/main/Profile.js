import React from 'react';
import { View } from 'react-native';
import { withTheme, Avatar, Text } from 'react-native-paper';

import { WavyHeader } from '../../components/WavyBackground';
import { styles } from '../../styles/main/Profile';
import Input from '../../components/InputNoPadding';

class Profile extends React.Component {

    constructor(prop) {
        super(prop);
    }

    render() {

        const theme = this.props.theme;

        return (
            <>
                <WavyHeader />
                <View style={styles.main}>
                    <Avatar.Icon size={150} icon="account" theme={theme} style={styles.avatar} />
                    <Text style={styles.profileName}>Lucas Aguiar</Text>
                    <View style={styles.row}>
                        <Text>EC Teste</Text>
                        <Text> | </Text>
                        <Text>BanQi</Text>
                    </View>
                
                </View>
            </>
        );
    }
}


export default withTheme(Profile);