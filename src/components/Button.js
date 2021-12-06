import React, { Component } from 'react';

class Button extends Component {
    state = {
        isAddedToCart: false
    }

    handleClick = e => {
        // if it says "Add To Cart" when clicked, 
        // then item ID and user ID added to cart 
            // can get item ID via prop
            // how to get user ID? (at the moment can't do that)

        // if it says "Remove From Cart" when clicked,
        // then fetch delete request by searching for cart that has same user ID & item ID

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
                    {this.buttonName()}
                </button>
            </div>
        );
    }
}

export default Button;
