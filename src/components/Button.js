import React, { Component } from 'react';

class Button extends Component {
    state = {
        isAddedToCart: false
    }

    handleClick = e => {
        this.setState({
            isAddedToCart: !this.state.isAddedToCart
        })
    }

    buttonName = () => {
        return this.state.isAddedToCart ? "Remove From Cart" : "Add To Cart"
    }

    render() {
        return (
            <div>
                <button className={"button"} onClick={this.handleClick}>
                    this.buttonName()
                </button>
            </div>
        );
    }
}

export default Button;
