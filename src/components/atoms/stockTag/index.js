import React from 'react';
import { Tag } from 'antd';

export default function stockTag(tag) {
    var color;
    if (tag >= 0 && tag <= 10) {
        color = 'red'
    } else if (tag > 10 && tag <= 100) {
        color = 'yellow'
    } else if (tag > 100) {
        color = 'green'
    } else {
        color = ''
    }
    return <Tag style={{width: 80, textAlign: "center"}} color={color} key={tag}>{tag}</Tag>;;
}