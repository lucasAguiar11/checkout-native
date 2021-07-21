import React from 'react';
import {withTheme, IconButton, Colors, Text, Appbar, Menu, Divider, Searchbar} from 'react-native-paper';
import {ScrollView, Image, View, RefreshControl} from 'react-native'

import ProductsStorage from "../../storage/ProductsStorage";

import {style, stylePrd, styleHeader} from '../../styles/main/ProductSelection';
import {WavyHeader} from '../../components/WavyBackground';
import Button from '../../components/Button';
import {PlaceholderComponentList} from '../../components/PlaceholderComponent';
import EmptyState from '../../components/EmptyState';
import {Assets} from "@react-navigation/stack";

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
        // await ProductsStorage.deleteAll();
        await this.getProducts();

        const {navigation} = this.props;
        navigation.addListener('focus', async (e, y) => {
            console.log(e, y);
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
    //     urlImg: 'data:image/jpeg;base64'
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
                <Image source={prd.urlImg == null ? require('../../assets/default.jpg') : {uri: prd.urlImg}}
                       style={stylePrd.Img} resizeMode={'cover'}/>
                <View>
                    <Text style={stylePrd.nameProd}>{prd.name}</Text>
                    <Text>{`R$ ${_amount}`}</Text>
                </View>
                <View style={stylePrd.fav}>

                    <IconButton
                        icon={"trash-can-outline"}
                        size={20}
                        color={Colors.red400}
                        onPress={() => this._removePrd(prd.id)}
                    />
                    <IconButton
                        icon={prd.selected ? 'check-circle' : 'check-circle-outline'}
                        size={20}
                        color={Colors.green400}
                        onPress={() => this._setCheck(prd)}
                    />
                </View>
            </View>
        );

    }

    _listProducts() {
        const products = this.state.products;
        console.log('_listProducts')

        if (products.length <= 0)
            return <EmptyState
                headerText={'Ops... Nenhum produto encontrado.'}
                subHeaderText={'Por favor, cadastre um produto para continuar a geração do seu link de pagamento.'}
                buttonText={'Cadastrar Produto'}
                onButtonClick={() => this._newProduct()}
            />

        return products.map((e, _i) => {
            return this._itemPrd({prd: e});
        });
    }

    //#endregion

    //#region Events

    async _removePrd(id){
        console.log('_removePrd -> ', id);
        await ProductsStorage.deleteById(id);
        const selectedPrd = this.state.products.filter((x) => x.id !== id);

        console.log('prds state -> ', selectedPrd);

        this.setState(prev => ({
            ...prev,
            products: selectedPrd
        }));

    }

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
