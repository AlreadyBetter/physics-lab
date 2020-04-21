import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label, ResponsiveContainer } from 'recharts';

export default class Graph extends Component {
    render() {
        return (
            <LineChart data={this.props.data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} width={800} height={400} >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="x, см" name="x, см">
                    <Label value="mg, H" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis dataKey="mg, H" >
                    <Label value="x, см" offset={0} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="mg, H" name="x, см" stroke="#ff7300" />
            </LineChart>
        )
    }
}
