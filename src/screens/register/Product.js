import React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {withTheme, HelperText} from 'react-native-paper';

import Input, {InputCurrency} from '../../components/InputNoPadding';
import Button from '../../components/Button';
import {styles} from '../../styles/register/Product';
import ImagePicker from '../../components/ImagePicker';
import {WavyHeader} from "../../components/WavyBackground";

import ProductsStorage from "../../storage/ProductsStorage";
import {textValidator, currencyValidator} from '../../helpers/Validation';
import {currencyNumber, uuidv4} from "../../helpers/Helpers";
import CustomMask from "react-native-masked-text/lib/masks/custom.mask";


class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        snackBarVisible: false,
        image: null,
        click: false,
        productName: {value: '', error: ''},
        productValue: {value: '', error: ''},
    }

    async register() {

        console.log(this.amount)

        const name = textValidator(this.state.productName.value, 'Nome');
        const value = currencyValidator(this.state.productValue.value, 'Valor (R$)')

        this.setState(() => ({click: true}));

        if (name || value) {
            this.setState((prevState) => (
                {
                    click: false,
                    productName: {...prevState.productName, error: name},
                    productValue: {...prevState.productValue, error: value},
                }));

            return false;
        }

        console.log("to register")

        let productToRegister = [{
            id: uuidv4(),
            name: this.state.productName.value,
            amount: this.state.productValue.value,
            urlImg: this.state.image !== null ? `data:image/png;base64, ${this.state.image.base64}` : null,
            selected: false,
        }];
        console.log("json -> ", productToRegister);
        await ProductsStorage.set(productToRegister);

        this.setState(() => ({click: false, snackBarVisible: true}));
        this.clearInputs();
    }

    clearInputs() {
        this.setState(() => (
            {
                image: null,
                click: false,
                productName: {value: null, error: null},
                productValue: {value: null, error: null},
            }));
    }

    render() {

        const {theme} = this.props;
        return (
            <KeyboardAvoidingView
                behavior={"position"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}>
                <WavyHeader/>
                <View style={styles.container}>
                    <View>
                        <ImagePicker onImageResult={(img) => this.setState({image: img})}/>
                        <Input
                            label="Nome do produto"
                            theme={theme}
                            value={this.state.productName.value}
                            error={!!this.state.productName.error}
                            errorText={this.state.productName.error}
                            returnKeyType={"next"}
                            onChangeText={(text) => this.setState({productName: {value: text, error: ''}})}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.amount.getElement().focus()}
                        />
                        <HelperText
                            type="info"
                            padding='none'
                            theme={theme}
                        >
                            Digite o nome do produto que deseja gerar o link de pagamento.
                        </HelperText>
                        <InputCurrency
                            label="Valor (R$)"
                            theme={theme}
                            value={this.state.productValue.value}
                            error={!!this.state.productValue.error}
                            errorText={this.state.productValue.error}
                            onChangeText={(text) => {
                                this.setState({productValue: {value: currencyNumber(text), error: ''}})
                            }}
                            keyboardType="numeric"
                            returnKeyType={"done"}
                            innerRef={ref => this.amount = ref}
                        />
                        <HelperText
                            type="info"
                            padding='none'
                            theme={theme}
                        >
                            Valor unitário do produto anunciado.
                        </HelperText>
                    </View>

                    <View style={styles.containerButton}>
                        <Button
                            theme={theme}
                            mode={'contained'}
                            loading={this.state.click}
                            onPress={() => this.register()}
                        >
                            {this.state.click ? null : "Salvar"}
                        </Button>
                    </View>

                </View>
            </KeyboardAvoidingView>

        );
    }
}


export default withTheme(Product);
