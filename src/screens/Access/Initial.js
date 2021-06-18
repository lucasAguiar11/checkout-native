import React from 'react';
import { View, Image } from 'react-native';
import { Text, Button, withTheme, useTheme } from 'react-native-paper';

import WavyBackground from '../../components/WavyBackground';
import styles from '../../styles/access/Initial'


const Initial = ({ navigation }) => {
    const theme = useTheme();

    // console.log(navigation);
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
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    theme={theme}
                    onPress={() => {
                        navigation.navigate('User')
                    }}
                >
                    ACESSAR
                </Button>
                <Button
                    mode={'outlined'}
                    style={[styles.button, styles.buttonReg]}
                    theme={theme}
                    contentStyle={styles.buttonContent}
                    onPress={() => console.log("click!")}
                >
                    CADASTRAR
                </Button>
            </View>
        </View>

    )
};


export default withTheme(Initial);
