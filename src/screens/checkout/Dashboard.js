import React from 'react';
import { View, SafeAreaView } from "react-native";
import { Card, withTheme, Avatar, Paragraph, Title, Text } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { theme } from '../../config/theme';
import { styles, SLIDER_WIDTH, ITEM_WIDTH } from '../../styles/checkout/Dashboard';
import { WavyHeader } from '../../components/WavyBackground';
import { definePeriod } from '../../helpers/Helpers';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            entries: [
                {
                    title: "Qtd. Links",
                    text: "Text 1",
                    iconName: 'cards',
                    iconColor: ''
                },
                {
                    title: "Valor Recebido",
                    text: "Text 2",
                    iconName: 'currency-usd-circle',
                    iconColor: ''
                },
                {
                    title: "Qtd. X Valor",
                    text: "Text 3",
                    iconName: 'chart-bell-curve',
                    iconColor: ''
                },
            ],
            presentation: definePeriod()

        }
    }

    _renderItem({ item, index }) {
        const LeftContent = props => <Avatar.Icon {...props} icon={item.iconName} />

        return (
            <Card>
                <Card.Title title={item.title} subtitle="Card Subtitle" left={LeftContent} />
                <Card.Content>
                    <Title>{item.title}</Title>
                    <Paragraph>{item.title}</Paragraph>
                </Card.Content>
            </Card>
        )
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: theme.colors.primary
                }}

                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    _carousel() {
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
                {this.pagination}
            </>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <WavyHeader />
                <View style={styles.header}>
                    <Text style={styles.textWhite} >{this.state.presentation}</Text>
                    <Title style={[styles.textWhite, styles.textBold]}>Lucas</Title>
                </View>
                <View style={styles.containerCarousel} >
                    {this._carousel()}
                </View>
                <View style={[styles.row, styles.cardsQtd]}>
                    <Card style={styles.shortcuts}>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                    <Card style={styles.shortcuts}>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                </View>

            </SafeAreaView>
        )
    }
}

export default withTheme(Dashboard);
