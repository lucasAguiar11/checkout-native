import React from 'react';
import { responsiveWidth, } from 'react-native-responsive-dimensions';
import { PieChart, LineChart } from "react-native-chart-kit";
import {rgbPrimary } from '../config/theme';

const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 1)`,
    labelColor: () => `rgba(${rgbPrimary.r}, ${rgbPrimary.g}, ${rgbPrimary.b}, 1)`,
    style: {
      borderRadius: 16
    },
};

export const Pie = ({ dt }) => {
    console.log(dt);
    return (
        <PieChart
            data={dt}
            width={responsiveWidth(90)}
            height={200}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"transparent"}
            paddingLeft={1}
            xLabelsOffset={100}
            avoidFalseZero
        />);

}

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};

export const Line = () => {

    return (<LineChart
        data={data}
        width={responsiveWidth(90)}
        height={200}
        chartConfig={chartConfig}
        bezier
    />);
}