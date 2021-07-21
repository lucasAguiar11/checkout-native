import React from 'react';
import {withTheme, IconButton, Colors, Text, Appbar, Menu, Divider, Searchbar} from 'react-native-paper';
import {ScrollView, Image, View, RefreshControl} from 'react-native'

import ProductsStorage from "../../storage/ProductsStorage";

import {style, stylePrd, styleHeader} from '../../styles/main/ProductSelection';
import {WavyHeader} from '../../components/WavyBackground';
import Button from '../../components/Button';
import {PlaceholderComponentList} from '../../components/PlaceholderComponent';
import EmptyState from '../../components/EmptyState';

class ProductSelection extends React.Component {

    constructor(props) {
        super(props);

        this._listProducts = this._listProducts.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._productsOptions = this._productsOptions.bind(this);
    }

    _isMounted = false;

    //#region States e ciclo de vida
    state = {
        searchClick: false,
        menu: false,
        refreshing: false,
        open: false,
        searchQuery: "",
        loadedProducts: false,
        products: []
    }


    async componentDidMount() {
        this._isMounted = true;
        await this.getProducts();

        const {navigation} = this.props;
        navigation.addListener('focus', async (e, y) =>  {
            console.log(e, y );
            await this.getProducts();
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    //#endregion

    //#region External data

    // {
    //     id: 1,
    //     name: 'Teste',
    //     amount: 100,
    //     selected: false,
    //     urlImg: 'data:image/jpeg;base64,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'
    // }
    async getProducts() {

        console.log('getProducts');
        if (!this._isMounted) return;

        let products = await ProductsStorage.getAll();
        this.setState({
            loadedProducts: true,
            products: products || []
        });
    }

    //#endregion

    //#region Make Screen

    _itemPrd({prd}) {

        const _amount = parseFloat(prd.amount).toFixed(2);
        return (
            <View key={prd.id} style={stylePrd.card}>
                <Image source={{uri: prd.urlImg}} style={stylePrd.Img} resizeMode={'cover'}/>
                <View style={stylePrd.fav}>
                    <IconButton
                        icon={prd.selected ? 'check-circle' : 'check-circle-outline'}
                        size={25}
                        color={Colors.green400}
                        onPress={() => this._setCheck(prd)}
                    />
                </View>
                <View style={stylePrd.priceContainer}>
                    <Text style={stylePrd.nameProd}>{prd.name}</Text>
                    <Text style={stylePrd.pricePrd}>{`R$ ${_amount}`}</Text>
                </View>
            </View>
        );

    }

    _listProducts() {
        const products = this.state.products;

        if (products.length <= 0)
            return <EmptyState
                headerText={'Ops... Nenhum produto encontrado.'}
                subHeaderText={'Por favor, cadastre um produto para continuar a geração do seu link de pagamento.'}
                buttonText={'Cadastrar'}
                onButtonClick={() => this._newProduct()}
            />

        return products.map((e, _i) => {
            return this._itemPrd({prd: e});
        });
    }

    //#endregion

    //#region Events

    _setCheck(prd) {
        const selectedPrd = this.state.products.find((x) => x.id === prd.id);
        selectedPrd.selected = !selectedPrd.selected;

        this.setState(prev => ({
            ...prev,
            availableGen: true,
            selectedPrd
        }));
    }

    _genLink() {
        const prods = this.state.products;
        console.log(prods.some(x => x.selected));
    }

    _onRefresh() {
        this.setState({refreshing: true, loadedProducts: false, products: [], searchQuery: "", searchClick: false});
        setTimeout(() => {
            this.setState({refreshing: false});
            this.getProducts();
        }, 1000);
    }

    _openMenu = () => this.setState({menu: true});

    _closeMenu = () => this.setState({menu: false});

    _productsOptions(option) {
        let prds = this.state.products;
        prds.forEach(x => x.selected = option);
        this.setState({
            products: prds
        });

        this._closeMenu();
    }

    _newProduct() {
        this.props.navigation.navigate('Product');
        this._closeMenu();
    }

    //#endregion

    render() {

        const theme = this.props.theme;

        const Header = () => (
            <Appbar.Header theme={theme} style={styleHeader.container}>
                <Appbar.Content title="Seus Produtos" subtitle={'Selecione ou cadastre os produto.'}/>
                <Appbar.Action icon="magnify" onPress={() => {
                    this.setState({searchClick: true})
                }}/>
                <Menu
                    theme={theme}
                    visible={this.state.menu}
                    onDismiss={this._closeMenu}
                    anchor={
                        <Appbar.Action
                            icon={'dots-vertical'}
                            color="white"
                            onPress={this._openMenu}
                        />
                    }
                >
                    <Menu.Item onPress={() => this._productsOptions(true)} title="Selecionar todos"/>
                    <Menu.Item onPress={() => this._productsOptions(false)} title="Limpar seleção"/>
                    <Divider/>
                    <Menu.Item onPress={() => this._newProduct()} title="Novo produto"/>
                </Menu>
            </Appbar.Header>
        );

        const HeaderSearch = () => (
            <Appbar.Header theme={theme} style={styleHeader.container}>
                <Searchbar
                    style={styleHeader.appbar}
                    placeholder="Busca..."
                    icon={'keyboard-backspace'}
                    onIconPress={() => this.setState({searchClick: false})}
                    value={this.state.searchQuery}
                    onChangeText={(txt) => this.setState({searchQuery: txt})}
                />
            </Appbar.Header>
        );


        const Footer = () => {

            if (!this.state.products.some(x => x.selected))
                return null;

            return (
                <View>
                    <Button
                        mode={'contained'}
                        theme={theme}
                        style={style.button}
                        uppercase={true}
                        onPress={() => this._genLink()}
                    >
                        Gerar Link
                    </Button>
                </View>
            );
        }


        return (
            <>
                <WavyHeader/>

                {this.state.searchClick ? HeaderSearch() : Header()}

                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    <View style={style.mainContainer}>
                        <View style={style.productsList}>
                            {this.state.loadedProducts
                                ? this._listProducts()
                                : <PlaceholderComponentList qtd={6}/>}
                        </View>
                    </View>
                </ScrollView>
                <Footer/>
            </>
        );
    }
}

export default withTheme(ProductSelection);
