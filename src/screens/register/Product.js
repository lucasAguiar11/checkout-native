import React from 'react';
import {View, ScrollView} from 'react-native';
import {withTheme, HelperText} from 'react-native-paper';

import Input from '../../components/InputNoPadding';
import Button from '../../components/Button';
import {styles} from '../../styles/register/Product';

import {textValidator, currencyValidator} from '../../helpers/Validation';
import ImagePicker from '../../components/ImagePicker';

import ProductsStorage from "../../storage/ProductsStorage";
import {uuidv4} from "../../helpers/Helpers";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.props.navigation.goBack = () => console.log("aaaaaaaa");
    }

    state = {
        image: null,
        click: false,
        productName: {value: '', error: ''},
        productValue: {value: '', error: ''},
    }


    async getProducts() {
        console.log(await ProductsStorage.getAll())
    }

    async removeProducts() {
        await ProductsStorage.deleteAll()
    }

    async register() {
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

        this.setState(() => ({click: false}));
    }

    render() {

        const theme = this.props.theme;
        return (
            <ScrollView>
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
                            onSubmitEditing={() => this.amount.focus()}
                        />
                        <HelperText
                            type="info"
                            padding='none'
                        >
                            Digite o nome do produto que deseja gerar o link de pagamento.
                        </HelperText>
                        <Input
                            label="Valor (R$)"
                            theme={theme}
                            value={this.state.productValue.value}
                            error={!!this.state.productValue.error}
                            errorText={this.state.productValue.error}
                            onChangeText={(text) => {
                                this.setState({productValue: {value: text, error: ''}})
                            }}
                            keyboardType="numeric"
                            returnKeyType={"done"}
                            innerRef={ref => this.amount = ref}
                        />
                        <HelperText
                            type="info"
                            padding='none'
                        >
                            Valor unitário do produto anunciado.
                        </HelperText>
                    </View>
                    <View>
                        <Button
                            theme={theme}
                            mode={'contained'}
                            loading={this.state.click}
                            onPress={() => this.register()}
                        >
                            {this.state.click ? null : "Salvar"}
                        </Button>
                        <Button
                            theme={theme}
                            mode={'contained'}
                            loading={this.state.click}
                            onPress={() => this.getProducts()}
                        >
                            Get
                        </Button>
                        <Button
                            theme={theme}
                            mode={'contained'}
                            loading={this.state.click}
                            onPress={() => this.removeProducts()}
                        >
                            Truncate
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}


export default withTheme(Product);
