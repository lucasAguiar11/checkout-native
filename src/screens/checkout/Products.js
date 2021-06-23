import React from 'react';
import { FAB, Portal, Provider, withTheme, Avatar, Button, Card, Title, Paragraph, IconButton, Colors } from 'react-native-paper';
import { ScrollView } from 'react-native'

import { styleFAB, style, stylePrd } from '../../styles/checkout/Produtcts';
import { WavyHeader } from '../../components/WavyBackground';
import { View } from 'react-native';


class Products extends React.Component {

    constructor(props) {
        super(props);

        this._openFAB = this._openFAB.bind(this);
        this._listProducts = this._listProducts.bind(this);
    }

    state = {
        open: false,
        products: [
            {
                id: 1,
                name: 'Teste',
                amount: 100,
                fav: false,
                selected: false
            },
            {
                id: 2,
                name: 'Teste',
                amount: 100,
                fav: false,
                selected: false
            },
            {
                id: 3,
                name: 'Teste',
                amount: 100,
                fav: false,
                selected: false
            },
            {
                id: 5,
                name: 'Teste',
                amount: 100,
                fav: false,
                selected: false
            }
        ]
    }

    _setFav(prd) {
        const t = this.state.products.find((x) => x.id == prd.id);
        console.log(prd, t);
    }

    _itemPrd({ prd }) {

        const _amount = parseFloat(prd.amount).toFixed(2);
        return (
            <Card key={prd.id} style={stylePrd.card}>
                <Card.Cover source={{ uri: 'https://picsum.photos/300/300' }} resizeMode={'cover'} style={stylePrd.sizeImg} />
                <Card.Title title={prd.name} subtitle={`R$ ${_amount}`} />
                <Card.Actions style={stylePrd.actions} >
                    <IconButton
                        icon={prd.fav ? 'heart' : 'heart-outline'}
                        size={20}
                        color={Colors.pink400}
                        onPress={() => this._setFav(prd)}
                    />
                </Card.Actions>
            </Card>
        );
    }

    _listProducts() {
        const products = this.state.products;
        return products.map((e, i) => {
            return this._itemPrd({ prd: e });
        });
    }

    _openFAB({ open }) {
        console.log(open)
        this.setState({ open })
    }

    render() {

        const CustomFAB = () => (
            <Portal>
                <FAB.Group
                    open={this.state.open}
                    icon={this.state.open ? 'calendar-today' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'star',
                            label: 'Star',
                            onPress: () => console.log('Pressed star'),
                        },
                        {
                            icon: 'email',
                            label: 'Email',
                            onPress: () => console.log('Pressed email'),
                        },
                        {
                            icon: 'bell',
                            label: 'Remind',
                            onPress: () => console.log('Pressed notifications'),
                            small: false,
                        },
                    ]}
                    fabStyle={styleFAB.fab}
                    onStateChange={this._openFAB}
                    onPress={() => {
                        if (this.state.open) {
                            // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        );

        return (
            <Provider>
                <ScrollView>
                    <View style={style.mainContainer}>
                        <WavyHeader />
                        <CustomFAB />
                        <View style={style.productsList} >
                            {this._listProducts()}
                        </View>
                    </View>
                </ScrollView>
            </Provider>

        );
    }
}

export default withTheme(Products);