import React from 'react';
import { View, Dimensions } from "react-native";
import { Card, withTheme, Text } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { styles, SLIDER_WIDTH, ITEM_WIDTH } from '../../styles/checkout/Dashboard';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSlide: 0,
            entries: [
                {
                    title: "Item 1",
                    text: "Text 1",
                },
                {
                    title: "Item 2",
                    text: "Text 2",
                },
                {
                    title: "Item 3",
                    text: "Text 3",
                },
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <Card style={styles.cardCarousel}>
                <Card.Content>
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
                    margin: 0,
                    padding: 0,
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    _carousel() {
        return (
            <>
                <View  style={styles.carousel} >
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.entries}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        renderItem={this._renderItem}
                        onSnapToItem={index => this.setState({ activeSlide: index })} />
                </View>
                <View>
                    {this.pagination}
                </View>
            </>

        );

    }


    render() {
        return (
            <View style={styles.container} >
                <View>
                    <Text>Boa tarde, Lucas</Text>
                </View>
                {this._carousel()}
                <View style={[styles.row, styles.cardsQtd]}>
                    <Card style={styles.shortcuts}>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                    <Card style={styles.shortcuts}
                    >
                        <Card.Content>

                        </Card.Content>
                    </Card>
                </View>
                <View style={[styles.row]}>
                    <Card style={styles.shortcutsFullW}
                    >
                        <Card.Content>
                        </Card.Content>
                    </Card>
                </View>
            </View>
        )
    }
}

export default withTheme(Dashboard);
