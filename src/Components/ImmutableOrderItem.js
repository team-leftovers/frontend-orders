import React, {useEffect, useState} from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';
import MutableOrderItem from "./MutableOrderItem";



function ImmutableOrderItem(props) {
    const [isExpanded, setExpanded] = useState(false);
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleOnClick() {
        setExpanded(!isExpanded);
    }
    function handleChange(event) {}
    return(
        <div className="collapsible" >
            <div className="row">
                <div className="card-header col-2" {...getToggleProps({onClick: handleOnClick})}>
                    <h4>
                        {props.orderItem.food.name}
                    </h4>
                </div>
                <div className="card-header col-3" {...getToggleProps({onClick: handleOnClick})}>
                    <h4>Quantity:{props.orderItem.quantity}</h4>
                </div>
                <div className="card-header col-4">
                    <form className="form-inline">
                        <label>
                            {/*<h4>Quantity:{orderItem.quantity}</h4>*/}
                            <input
                                type = "number"
                                value = {props.orderItem.quantity}
                                // value = {orderItem.quantity}
                                // onChange={(e) => setQuantity(e.target.value)}
                                onChange={handleChange}
                            />

                            {/*<input type="number" value={formQuantity} onChange={handleChange} />*/}
                        </label>
                        {/*<input type="submit" value="Update" />*/}
                    </form>
                </div>
                <div className="card-header col-2">
                </div>
                <div className="card-header col-1">
                    <h4>
                        ${props.orderItem.quantity * props.orderItem.food.price}
                    </h4>
                </div>

            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {showFood(props.orderItem)}
                </div>
            </div>
        </div>
    );


}

function showFood(orderItem) {
    return (
        <div>
            id: {orderItem.id} <br/>
            name: {orderItem.food.name} <br/>
            quantity: {orderItem.quantity} <br/>
            price: {orderItem.food.price} <br/>
            description: {orderItem.food.description} <br/>
            restaurant Id: {orderItem.food.restaurantId} <br/>
            Additional Instructions: {orderItem.additionalInstructions}<br/>
            restaurant: {orderItem.food.restaurant} <br/>
        </div>
    )
}

export default ImmutableOrderItem;
