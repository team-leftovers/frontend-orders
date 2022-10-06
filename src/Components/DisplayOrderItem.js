import React from "react";
import '../App.css';

import MutableOrderItem from "./MutableOrderItem";
import ImmutableOrderItem from "./ImmutableOrderItem";


class DisplayOrderItem extends React.Component {
    constructor(props) {
        super(props);
        // this.handleItemUpdate = this.handleItemUpdate.bind(this);
        this.state = {
            mutable: this.props.mutable
        };
    }
    render() {
        return(
            <div>
                {this.state.mutable &&
                    <MutableOrderItem itemArrayElement={this.props.itemArrayElement} orderItem={this.props.orderItem}
                                      onItemUpdate={this.props.onItemUpdate}/>
                }
                {!this.state.mutable &&
                    <ImmutableOrderItem itemArrayElement={this.props.itemArrayElement} orderItem={this.props.orderItem}
                                        onItemUpdate={this.props.onItemUpdate}/>
                }
            </div>
        )
    }
}

export default DisplayOrderItem