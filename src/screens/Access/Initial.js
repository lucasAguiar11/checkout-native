import React from 'react';
import { View, Image } from 'react-native';
import { Text, withTheme, useTheme } from 'react-native-paper';

import { WavyBackground } from '../../components/WavyBackground';
import styles from '../../styles/access/Initial';
import Button from '../../components/Button';


const Initial = ({ navigation }) => {
    const theme = useTheme();
    return (
        <View style={styles.container}>
            <WavyBackground />
            <View style={styles.containerLogo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo-cafe.png')}
                />
                <Text style={styles.slogan}>
                    A MELHOR EXPERIÊNCIA EM CAFÉS
                </Text>
            </View>
            <View style={styles.containerButton} >
                <Button
                    mode={'contained'}
                    theme={theme}
                    onPress={() => {
                        navigation.navigate('User')
                    }}
                >
                    ACESSAR
                </Button>
                <Button
                    mode={'outlined'}
                    theme={theme}
                    border={true}
                    onPress={() => console.log("click!")}
                >
                    CADASTRAR
                </Button>
            </View>
        </View>

    )
};


export default withTheme(Initial);
