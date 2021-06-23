import React from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { Card, withTheme, Avatar, ProgressBar, Title, Text, IconButton } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { theme, rgbPrimary } from '../../config/theme';
import { styles, styleHeader, styleCarousel, SLIDER_WIDTH, ITEM_WIDTH } from '../../styles/checkout/Dashboard';
import { WavyHeader } from '../../components/WavyBackground';
import { definePeriod } from '../../helpers/Helpers';
import { Pie, Line } from '../../components/Charts';
import PlaceholderCardComponent from '../../components/PlaceholderComponent';

class Dashboard extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.getCardData = this.getCardData.bind(this);
        this._renderItem = this._renderItem.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    state = {
        refreshing: false,
        activeSlide: 0,
        presentation: definePeriod(),
        loadCardHeader: false,
        loadChartPayMethod: false,
        entries: [{}, {}],
        chartPayMethod: []
    }

    componentDidMount() {
        console.log('componentDidMount');
        this._isMounted = true;
        this.getCardData();
        this.getGrafhData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getCardData() {
        console.log('getCardData');
        setTimeout(() => {
            if (this._isMounted)
                this.setState({
                    loadCardHeader: true,
                    entries: [
                        {
                            key: "amount",
                            title: "Valores Recebidos",
                            subtitle: "Total de links pagos nos últimos 7 dias.",
                            amount: 100,
                            total: 700,
                            iconName: 'currency-usd-circle',
                            iconColor: '',
                        },
                        {
                            key: 'qtd',
                            title: "Quantidade de Links",
                            subtitle: "Links gerados nos últimos 7 dias.",
                            value: 9,
                            iconName: 'cards',
                            iconColor: '',
                        },
                    ]
                });
        }, 3000);
    }

    getGrafhData() {
        console.log('getGrafhData');
        setTimeout(() => {
            if (this._isMounted)
                this.setState({
                    loadChartPayMethod: true,
                    chartPayMethod: [
                        {
                            name: "Crédito",
                            value: 20,
                            color: `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 1)`,
                            legendFontColor: "#000",
                            legendFontSize: 14
                        },
                        {
                            name: "Boleto",
                            value: 10,
                            color: `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 0.5)`,
                            legendFontColor: "#000",
                            legendFontSize: 14
                        },
                        {
                            name: "Pix",
                            value: 6,
                            color: `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 0.25)`,
                            legendFontColor: "#000",
                            legendFontSize: 14
                        }
                    ]
                });
        }, 1000);

    }

    _onRefresh() {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
            this.getCardData();
            this.getGrafhData();
        }, 3000);
    }

    _renderItem({ item, index }) {

        if (!this.state.loadCardHeader)
            return (
                <Card>
                    <Card.Content style={[styles.cardContent, styleCarousel.containerCarousel]}>
                        <PlaceholderCardComponent />
                    </Card.Content>
                </Card>
            );

        const LeftContent = props => <Avatar.Icon {...props} icon={item.iconName} style={styleCarousel.iconStyle} />

        const Card1 = () => {
            const _value = parseInt(item.value);
            return (
                <Card>
                    <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
                    <Card.Content style={[styles.cardContent, styleCarousel.containerCarousel]}>
                        <Text style={styleCarousel.qtdText} >{_value < 10 ? `0${_value}` : _value}</Text>
                    </Card.Content>
                </Card>
            )
        };

        const Card2 = () => {

            const _total = parseFloat(item.total).toFixed(2);
            const _amount = parseFloat(item.amount).toFixed(2);
            const _percent = (_amount) / _total;

            return (
                <Card>
                    <Card.Title title={item.title} subtitle={item.subtitle} left={LeftContent} />
                    <Card.Content style={styles.cardContent}>
                        <Text>R$ {_amount}</Text>
                        <ProgressBar progress={_percent} color={theme.colors.secondary} />
                        <Text style={styleCarousel.total}>R$ {_total}</Text>
                    </Card.Content>
                </Card>
            );
        }

        const items = {
            qtd: Card1(),
            amount: Card2()
        };

        return items[item.key];
    }

    _carousel() {
        const { entries, activeSlide } = this.state;

        return (
            <>
                <Carousel
                    style={styles.carousel}
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.entries}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({ activeSlide: index })} />
                <Pagination
                    dotsLength={entries.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        backgroundColor: theme.colors.secondary
                    }}

                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </>
        );
    }

    render() {

        const Presentation = () => (<>
            <WavyHeader />
            <View style={[styleHeader.header, styles.row]}>
                <View>
                    <Text style={[styleHeader.textWhite, styleHeader.presentation]} >{this.state.presentation}</Text>
                    <Title style={[styleHeader.textWhite, styleHeader.textBold]}>Lucas</Title>
                </View>

                <IconButton
                    icon="exit-to-app"
                    size={30}
                    color={'#ffff'}
                    onPress={() => alert('Click em sair')}
                />
            </View>
        </>);

        const PaymentMethodChart = () => (
            <View style={styles.cardChart}>
                <Card>
                    <Card.Content>
                        <Text>Formas de Pagamento</Text>
                        {
                            this.state.loadChartPayMethod
                                ? <Pie dt={this.state.chartPayMethod} />
                                : <PlaceholderCardComponent h={18} w={30} marginHorizontal={0} marginVertical={15} lineMargin={4} />
                        }
                    </Card.Content>
                </Card>
            </View>

        );

        const LastPaymentLinks = () => (
            <View style={styles.cardChart}>
                <Card>
                    <Text style={{ paddingHorizontal: 15, paddingVertical: 15 }}>Links pagos dos últimos 7 dias</Text>
                    <Card.Content style={styles.cardContentChart}>
                        <Line />
                    </Card.Content>
                </Card>
            </View >
        );

        return (
            <ScrollView style={styles.scroll}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            >
                <SafeAreaView style={styles.container}>
                    <Presentation />
                    <View style={styleCarousel.containerCarousel} >
                        {this._carousel()}
                    </View>
                    <PaymentMethodChart />
                    <LastPaymentLinks />
                </SafeAreaView>
            </ScrollView>
        );
    }
}

export default withTheme(Dashboard);
