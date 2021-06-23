import React from 'react';
import { responsiveWidth, } from 'react-native-responsive-dimensions';
import { PieChart, LineChart } from "react-native-chart-kit";
import { rgbPrimary } from '../config/theme';

const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 1)`,
    labelColor: () => `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 1)`,
    propsForDots: {
        r: 6,
        strokeWidth: 2,
        stroke: "#fff"
    }
};

export const Pie = ({ dt }) => {
    return (
        <PieChart
            data={dt}
            width={responsiveWidth(90)}
            height={200}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"transparent"}
            avoidFalseZero
        />);

}

export const Line = ({ dt }) => {

    return (<LineChart
        data={
            dt
        }
        width={responsiveWidth(85)}
        height={260}
        yAxisLabel={'R$ '}
        transparent={true}
        verticalLabelRotation={50}
        withInnerLines={true}
        chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 2,
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={{
        }}
    />);
}
