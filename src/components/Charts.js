import React from 'react';
import { responsiveWidth, } from 'react-native-responsive-dimensions';
import { PieChart } from "react-native-chart-kit";

import { theme, rgbPrimary } from '../config/theme';

const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const data = [
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
    },
];

export const Pie = ({ dt }) => {
    console.log(dt);
    return (
        <PieChart
            data={data}
            width={responsiveWidth(100)}
            height={200}
            chartConfig={chartConfig}
            accessor={"value"}
            backgroundColor={"transparent"}
            avoidFalseZero
        />);

}