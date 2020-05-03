import React, { Component } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';

export default class GraphSlidingFriction extends Component {
    render() {
        return (
            <LineChart data={this.props.data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} width={800} height={400} >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="n" name="N, H">
                    <Label value="N" offset={0} position="insideBottom" />
                </XAxis>
                <YAxis dataKey="f" >
                    <Label value="F" offset={0} position="insideLeft" />
                </YAxis>
                <Tooltip />
                <Line type="monotone" dataKey="n" name="F" stroke="#ff7300" />
            </LineChart>
        )
    }
}
