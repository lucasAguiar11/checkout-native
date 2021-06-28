import React from 'react';
import { View } from 'react-native';
import { withTheme, HelperText } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';

import Input from '../../components/InputNoPadding';
import Button from '../../components/Button';
import { styles } from '../../styles/register/Product';

import { textValidator, currencyValidator } from '../../helpers/Validation';


class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        click: false,
        productName: { value: '', error: '' },
        productDesc: { value: '', error: '' },
        productValue: { value: '', error: '' },
    }


    register(){
        const name = textValidator(this.state.productName.value, 'Nome');
        const desc = textValidator(this.state.productDesc.value, 'Descrição');
        const value = currencyValidator(this.state.productValue.value, 'Valor (R$)')

        this.setState(() => ({ click: true }));

        if (name || desc || value) {
            this.setState((prevState) => (
                {
                    click: false,
                    productName: { ...prevState.productName, error: name },
                    productDesc: { ...prevState.productDesc, error: desc },
                    productValue: { ...prevState.productValue, error: value },
                }));

            return;
        }
    }



    render() {

        const theme = this.props.theme;

        return (
            <View style={styles.container}>
                <View>
                    <Input
                        label="Nome do produto"
                        theme={theme}
                        value={this.state.productName.value}
                        error={!!this.state.productName.error}
                        errorText={this.state.productName.error}
                        returnKeyType={"next"}
                        onChangeText={(text) => this.setState({ productName: { value: text, error: '' } })}
                        blurOnSubmit={false}
                        onSubmitEditing={() => this.desc.focus()}
                    />
                    <HelperText
                        type="info"
                        padding='none'
                    >
                        Digite o nome do produto que deseja gerar o link de pagamento.
                    </HelperText>
                    <Input
                        label="Descrição"
                        multiline={true}
                        theme={theme}
                        value={this.state.productDesc.value}
                        error={!!this.state.productDesc.error}
                        errorText={this.state.productDesc.error}
                        onChangeText={(text) => this.setState({ productDesc: { value: text, error: '' } })}
                        innerRef={ref => this.desc = ref}
                        returnKeyType={"next"}
                        onSubmitEditing={() => this.amount.focus()}
                    />
                    <HelperText
                        type="info"
                        padding='none'
                    >
                        Uma pequena descrição do seu produto.
                    </HelperText>
                    <Input
                        label="Valor (R$)"
                        theme={theme}
                        value={this.state.productValue.value}
                        error={!!this.state.productValue.error}
                        errorText={this.state.productValue.error}
                        onChangeText={(text) => {
                        
                            this.setState({ productValue: { value: text, error: '' } })
                        
                        }}
                        keyboardType="numeric"
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
                </View>
            </View>
        );
    }
}


export default withTheme(Product);