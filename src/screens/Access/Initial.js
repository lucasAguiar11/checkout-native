import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Button, withTheme, useTheme } from 'react-native-paper';
import WavyBackground from '../../components/WavyBackground';


const Painter = () => (
    <WavyBackground />
);


const Initial = () => {
    const theme = useTheme();
    console.log(theme);
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
                    onPress={() => console.log("click!")}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    containerLogo: {
        padding: 20,
        justifyContent: 'center',
        flex: 1
    },

    containerButton: {
        padding: 20,
    },

    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        alignItems: 'center'
    },

    slogan: {
        fontSize: 20,
        textTransform: 'capitalize',
        flexWrap: 'wrap',
        lineHeight: 30
    },

    button: {
        marginTop: 15,
        alignContent: 'center',
        justifyContent: 'center',
        height: 50,
    },
    buttonContent: {
        height: 50
    },
    buttonReg: {
        borderWidth: 2
    }
});

export default withTheme(Initial);
