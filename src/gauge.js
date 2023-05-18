import React, { useState, useEffect} from 'react';
import { Gauge } from '@ant-design/plots';

const ShowGauge = ({n2}) => {
    const ticks = [0, 1 / 3, 2 / 3, 1]
    const color = ['#F4664A', '#FAAD14', '#30BF78']

    const config = {
        percent: n2 / 1500,
        range: {ticks: [0, 1], color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],},
        axis: {
            label: {formatter(v) {return Number(v) * 1500;},},
            subTickLine: {count: 3,},},
        indicator: {
            pointer: {style: {stroke: '#D0D0D0'},},
            pin: {style: {stroke: '#D0D0D0'},},},
        statistic: {
            title: {formatter: ({ percent }) => {return (Number(percent)*1500).toFixed(0);}, style: ({ percent }) => {
                    return {fontSize: '24px', lineHeight: 1, color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],};},},
            content: {offsetY: 36, style: {fontSize: '24px', color: '#4B535E',}, formatter: () => '动态注氮流量',},
        }
    }
    return <Gauge {...config} />;
}
export default ShowGauge
