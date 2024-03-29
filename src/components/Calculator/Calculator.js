import React, { Component } from 'react'

import Button from './Button'
import ClearButton from './ClearButton'
import Input from './Input'

export default class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            previousNumber: "",
            currentNumber: "",
            operator: ""
        };
    }

    addToInput = val => {
        this.setState({ input: this.state.input + val });
    };

    addDecimal = val => {
        // only add decimal if there is no current decimal point present in the input area
        if (this.state.input.indexOf(".") === -1) {
            this.setState({ input: this.state.input + val });
        }
    };

    addZeroToInput = val => {
        // if this.state.input is not empty then add zero
        if (this.state.input !== "") {
            this.setState({ input: this.state.input + val });
        }
    };

    clearInput = () => {
        this.setState({ input: "" });
    };

    add = () => {
        this.setState({
            input: "",
            previousNumber: this.state.input,
            operator: "plus"
        });
    };

    subtract = () => {
        this.setState({
            input: "",
            previousNumber: this.state.input,
            operator: "subtract"
        });
    };

    multiply = () => {
        this.setState({
            input: "",
            previousNumber: this.state.input,
            operator: "multiply"
        });
    };

    divide = () => {
        this.setState({
            input: "",
            previousNumber: this.state.input,
            operator: "divide"
        });
    };

    evaluate = () => {
        this.setState({
            currentNumber: this.state.input
        })

        if (this.state.operator === "plus") {
            this.setState({
                input:
                    parseFloat(this.state.previousNumber) +
                    parseFloat(this.state.currentNumber)
            });
        } else if (this.state.operator === "subtract") {
            this.setState({
                input:
                    parseFloat(this.state.previousNumber) -
                    parseFloat(this.state.currentNumber)
            });
        } else if (this.state.operator === "multiply") {
            this.setState({
                input:
                    parseFloat(this.state.previousNumber) *
                    parseFloat(this.state.currentNumber)
            });
        } else if (this.state.operator === "divide") {
            this.setState({
                input:
                    parseFloat(this.state.previousNumber) /
                    parseFloat(this.state.currentNumber)
            });
        }
    };

    render() {
        return (
            <div className="calc">
                <div className="calc-wrapper">
                    <div className="row">
                        <Input>{this.state.input}</Input>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>7</Button>
                        <Button handleClick={this.addToInput}>8</Button>
                        <Button handleClick={this.addToInput}>9</Button>
                        <Button handleClick={this.divide}>/</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>4</Button>
                        <Button handleClick={this.addToInput}>5</Button>
                        <Button handleClick={this.addToInput}>6</Button>
                        <Button handleClick={this.multiply}>*</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addToInput}>1</Button>
                        <Button handleClick={this.addToInput}>2</Button>
                        <Button handleClick={this.addToInput}>3</Button>
                        <Button handleClick={this.add}>+</Button>
                    </div>
                    <div className="row">
                        <Button handleClick={this.addDecimal}>.</Button>
                        <Button handleClick={this.addZeroToInput}>0</Button>
                        <Button handleClick={this.evaluate}>=</Button>
                        <Button handleClick={this.subtract}>-</Button>
                    </div>
                    <div className="row">
                        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}
