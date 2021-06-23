import React from 'react';
import { View } from 'react-native';
import { FAB, Portal, Provider, withTheme } from 'react-native-paper';

import { WavyHeader } from '../../components/WavyBackground';


class Products extends React.Component {

    constructor(props) {
        super(props);

        this._openFAB = this._openFAB.bind(this);
    }

    state = {
        open: false
    }

    _openFAB({ open }) {
        console.log(open)
        this.setState({ open })
    }

    render() {
        const theme = this.props.theme;

        const CustomFAB = () => (
            <Portal>
                <FAB.Group
                    theme={theme}
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
                <WavyHeader />
                <CustomFAB />
            </Provider>

        );
    }
}

export default withTheme(Products);