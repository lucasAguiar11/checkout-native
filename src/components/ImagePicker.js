import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Platform, PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Card, IconButton, withTheme, Colors} from 'react-native-paper';
import {theme} from "../config/theme";


const Img = ({onImageResult}) => {
    const [filePath, setFilePath] = useState(null);

    const requestCameraPermission = async () => {
        if (Platform.OS !== 'android')
            return true;
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS !== 'android')
            return true;

        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
        }
        return false;
    };

    const saveData = (item) => {
        console.log('base64 -> ', item.base64);
        console.log('uri -> ', item.uri);
        console.log('width -> ', item.width);
        console.log('height -> ', item.height);
        console.log('fileSize -> ', item.fileSize);
        console.log('type -> ', item.type);
        console.log('fileName -> ', item.fileName);
        setFilePath(item);
        onImageResult(item)
    }

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30,
            saveToPhotos: true,
            includeBase64: true
        };

        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();

        if (!isCameraPermitted || !isStoragePermitted) return;

        await launchCamera(options, (response) => {

            console.log('Response = ', response);
            const {assets} = response;
            const item = assets != null ? assets[0] : null;

            if (response.didCancel) {
                setFilePath(null);
                console.log('User cancelled camera picker');
                return;
            } else if (response.errorCode === 'camera_unavailable') {
                alert('Opss... A câmera não está disponível no momento.');
                return;
            } else if (response.errorCode === 'permission') {
                alert('Opss... O app não possui permissão para acessar a câmera.');
                return;
            } else if (response.errorCode === 'others') {
                alert('Opss... Erro interno ao acessar a câmera.');
                console.log(response.errorMessage);
                return;
            }

            saveData(item);
        });
    };


    const chooseFile = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            includeBase64: true
        };

        await launchImageLibrary(options, response => {
            console.log('Response = ', response);

            const {assets} = response;
            const item = assets != null ? assets[0] : null;

            if (response.didCancel) {
                // setFilePath(null);
                console.log('User cancelled camera picker');
                return;
            } else if (response.errorCode === 'camera_unavailable') {
                alert('Opss... A câmera não está disponível no momento.');
                return;
            } else if (response.errorCode === 'permission') {
                alert('Opss... O app não possui permissão para acessar a câmera.');
                return;
            } else if (response.errorCode === 'others') {
                alert('Opss... Erro interno ao acessar a câmera.');
                console.log(response.errorMessage);
                return;
            }
            saveData(item);
        });
    };

    return (
        <View>
            <Card>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => chooseFile("photo")}
                >
                    <Card.Cover source={filePath == null ? require('../assets/default.jpg') : {uri: filePath.uri}}/>
                </TouchableOpacity>
                <Card.Actions style={styles.actions}>
                    {
                        filePath != null
                        && <IconButton
                            icon="trash-can-outline"
                            size={20}
                            theme={theme}
                            color={Colors.red400}
                            style={styles.removeImg}

                            onPress={() => {
                                onImageResult(null)
                                setFilePath(null)
                            }}
                        />
                    }

                    <IconButton
                        icon="camera"
                        size={20}
                        theme={theme}
                        color={theme.colors.primary}
                        onPress={() => captureImage("photo")}
                    />

                </Card.Actions>
            </Card>

        </View>
    );
}

export default withTheme(Img);

const styles = StyleSheet.create({
    removeImg: {
        position: 'absolute',
        bottom: 210,
        right: 0
    },
    actions: {
        backgroundColor: '#fff'
    }
});
