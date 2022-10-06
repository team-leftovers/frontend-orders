import React, {useEffect, useState} from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';
import MutableOrderItem from "./MutableOrderItem";
import GetOrderById from "./GetOrderById";
import axios from "axios";
import ImmutableOrderItem from "./ImmutableOrderItem";
import Sandbox from "../Sandbox/Sandbox";
import DisplayOrderItem from "./DisplayOrderItem";

const globalOrder = {
    "id": 1,
    "customerId": 1,
    "customer": 1,
    "restaurantId": 1,
    "restaurant": 1,
    "driverId": 3,
    "driver": 3,
    "discountId": 4,
    "discount": 4,
    "status": "delivery",
    "deliveryTime": "03:03:00",
    "totalPrice": 200.43,
    "driverRating": 3,
    "items": [
        {
            "id": 1,
            "orderId": 1,
            "order": 1,
            "foodId": 1,
            "food": {
                "id": 1,
                "name": "Food-ish Stuff",
                "price": 13.99,
                "description": "This might be food. Maybe",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 5,
            "additionalInstructions": "Extra Dirt",
            "foodRating": 5
        },
        {
            "id": 2,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": null,
            "foodRating": null
        },
        {
            "id": 31,
            "orderId": 1,
            "order": 1,
            "foodId": 3,
            "food": {
                "id": 3,
                "name": "Skunk Cabbage",
                "price": 5.75,
                "description": "It's supposed to smell that way. Really.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 2,
            "additionalInstructions": "Extra Dirt",
            "foodRating": null
        },
        {
            "id": 40,
            "orderId": 1,
            "order": 1,
            "foodId": 1,
            "food": {
                "id": 1,
                "name": "Food-ish Stuff",
                "price": 13.99,
                "description": "This might be food. Maybe",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 2,
            "additionalInstructions": "This item added from Postman",
            "foodRating": null
        },
        {
            "id": 41,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is a food item added from the FrontEnd",
            "foodRating": null
        },
        {
            "id": 42,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is a food item added from the FrontEnd",
            "foodRating": null
        },
        {
            "id": 43,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from the FrontEnd, with props!",
            "foodRating": null
        },
        {
            "id": 44,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from the FrontEnd, with props!",
            "foodRating": null
        },
        {
            "id": 45,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from the FrontEnd, with props!",
            "foodRating": null
        },
        {
            "id": 46,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from the FrontEnd, with props!",
            "foodRating": null
        },
        {
            "id": 47,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        },
        {
            "id": 48,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        },
        {
            "id": 49,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        },
        {
            "id": 50,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        },
        {
            "id": 51,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        },
        {
            "id": 52,
            "orderId": 1,
            "order": 1,
            "foodId": 2,
            "food": {
                "id": 2,
                "name": "Old Boot",
                "price": 1.00,
                "description": "Hard-boiled boot. Not tasty.",
                "restaurantId": 1,
                "restaurant": 1
            },
            "quantity": 7,
            "additionalInstructions": "This is an item added from CreateOrderItem.js!",
            "foodRating": null
        }
    ]
}

function DisplayOrder(props) {
    //const [order, setOrder] = useState(globalOrder);
    const [orderId, setOrderId] = useState(1);

    // function handleOrderUpdate(gotOrder){
    //     setOrder(gotOrder);
    //     console.log("order", order);
    // }


    function handleItemUpdate(itemArrayElement, formQuantity)
    {

        //props.onItemUpdate(props.itemArrayElement, orderItem, formQuantity);
        props.passItemUpdate(itemArrayElement, formQuantity);
    }

    function ItemArray() {
        return (
            <div>
                {
                    props.order.items.map
                    (
                        function(dataItem, keyValue)
                        {
                            //translation: for each key (uniqueness not checked?) in the array held by props.data, do the thing, and {dataItem} is the value of the array at that element
                            return <div key={ keyValue }>{
                                // <h1> key: {keyValue}</h1>
                                // <h1>{printSomeShit(dataItem)}</h1>
                                // <MutableOrderItem itemArrayElement = {keyValue} orderItem={props.order.items[keyValue]} onItemUpdate={handleItemUpdate}/>


                                <DisplayOrderItem
                                    itemArrayElement = {keyValue}
                                    orderItem={props.order.items[keyValue]}
                                    onItemUpdate={handleItemUpdate}
                                    mutable = {false}/>

                                // <h1>{MutableOrderItem(dataItem)}</h1>
                            }</div>;
                        }
                    )
                }
            </div>
        )
    }


    return (
        <div>
            {/*<div className="row">*/}
                {/*<div className="bg-l-order-pane col-4"><h1>Order: {props.order.id}</h1></div>*/}
                {/*<div className="bg-l-order-pane col-8">*/}

                {/*</div>*/}
            {/*</div>*/}
            <div className="bg-l-order-pane col-12">
                <ItemArray/>
                {/*<MutableOrderItem itemArrayElement = {0} orderItem={order.items[0]} onItemUpdate={handleItemUpdate}/>*/}
                {/*<MutableOrderItem itemArrayElement = {1} orderItem={order.items[1]} onItemUpdate={handleItemUpdate}/>*/}
                {/*<MutableOrderItem itemArrayElement = {2} orderItem={itemArray[2]} onItemUpdate={this.handleItemUpdate}/>*/}
                {/*<GetOrderById orderId = {orderId}/>*/}

                {/*{MutableOrderItem(itemArray)}*/}
                {/*<Sandbox value={thisThing} data={itemArray}/>*/}
                {/*<DeleteOrder orderId = {91}/>*/}
                {/*<UpdateOrder orderId = {3} driverId = {3} discountId = {2} orderStatus = "error" deliveryTime = "12:03:01" totalPrice = {3.14} driverRating = {4}/>*/}
                {/*<CreateOrder customerId ={5} restaurantId = {2}/>*/}
                {/*<CreateOrder driverId = {3} customerId ={5} restaurantId = {2} discountId ={1} deliveryTime="12:01:01" orderStatus = "waiting" totalPrice = {12.21} driverRating = {1}/>*/}
                {/*<CreateOrderItem orderId={1} foodId={2} quantity={7} additionalInstructions={"This is an item added from CreateOrderItem.js!"}/>*/}
                {/*<OrderItemCreateDto orderId={1} foodId={2} quantity={7} additionalInstructions={"Left boot only, no tongue"}/>*/}
                {/*<GetOrderById orderId = {1}/>*/}
            </div>
        </div>
    )
}
function ReadOrder2(props) {
    const [order, setOrder] = useState(globalOrder);
    const [orderId, setOrderId] = useState(1);

    function handleOrderUpdate(gotOrder){
        setOrder(gotOrder);
        console.log("order", order);
    }

    function handleChange(event) {
        setOrderId(event.target.value);
        let myOrder = order;
        myOrder.id = event.target.value;
        setOrder(myOrder);
        // console.log("order", order);

        //call as render (React?) object vs call as function
        {/*<GetOrderById orderId = {1} onItemUpdate={this.handleItemUpdate}/>*/}
        console.log("Get New Order!");
        GetOrderById( {orderId: event.target.value});
        // GetOrderById( {orderId: myOrder, onGotOrder:handleOrderUpdate})
        console.log("order", event.target.value);
        // <GetOrderById orderId = {orderId}/>

        //for some reason the updates from setOrder don't propagate reliably
        // props.onItemUpdate(props.itemArrayElement, orderItem);

    }

    function handleItemUpdate(itemArrayElement, orderItem, formQuantity)
    {
        //load quantity into orderItem
        orderItem.quantity = formQuantity;

        //get items array
        let myItems = order.items;
        //load with updated order item
        myItems[itemArrayElement] = orderItem;

        //get order
        let myOrder = order;
        //load with updated items array
        myOrder.items = myItems;

        //update state of order
        setOrder(myOrder)
        console.log("order", order)
    }
    function ItemArray() {
        return (
            <div>
                {
                    order.items.map
                    (
                        function(dataItem, keyValue)
                        {
                            //translation: for each key (uniqueness not checked?) in the array held by props.data, do the thing, and {dataItem} is the value of the array at that element
                            return <div key={ keyValue }>{
                                // <h1> key: {keyValue}</h1>
                                // <h1>{printSomeShit(dataItem)}</h1>
                                // <Sandbox itemArrayElement = {keyValue} orderItem={order.items[keyValue]} onItemUpdate={handleItemUpdate}/>
                                <MutableOrderItem itemArrayElement = {keyValue} orderItem={order.items[keyValue]} onItemUpdate={handleItemUpdate}/>
                                // <h1>{MutableOrderItem(dataItem)}</h1>
                            }</div>;
                        }
                    )
                }
            </div>
        )
    }


    return (
        <div>
            <div className="row">
                <div className="bg-l-order-pane col-4"><h1>Order:</h1></div>
                <div className="bg-l-order-pane col-8">
                    <form>
                        <label>
                            {/*<h4>Quantity:{orderItem.quantity}</h4>*/}
                            <input
                                type = "number"
                                value = {orderId}
                                // value = {orderItem.quantity}
                                // onChange={(e) => setQuantity(e.target.value)}
                                onChange={handleChange}
                            />

                            {/*<input type="number" value={formQuantity} onChange={handleChange} />*/}
                        </label>
                    </form>
                </div>
            </div>
            <div className="bg-l-order-pane col-12">
                <ItemArray/>
                {/*<MutableOrderItem itemArrayElement = {0} orderItem={order.items[0]} onItemUpdate={handleItemUpdate}/>*/}
                {/*<MutableOrderItem itemArrayElement = {1} orderItem={order.items[1]} onItemUpdate={handleItemUpdate}/>*/}
                {/*<MutableOrderItem itemArrayElement = {2} orderItem={itemArray[2]} onItemUpdate={this.handleItemUpdate}/>*/}
                <GetOrderById orderId = {orderId}/>

                {/*{MutableOrderItem(itemArray)}*/}
                {/*<Sandbox value={thisThing} data={itemArray}/>*/}
                {/*<DeleteOrder orderId = {91}/>*/}
                {/*<UpdateOrder orderId = {3} driverId = {3} discountId = {2} orderStatus = "error" deliveryTime = "12:03:01" totalPrice = {3.14} driverRating = {4}/>*/}
                {/*<CreateOrder customerId ={5} restaurantId = {2}/>*/}
                {/*<CreateOrder driverId = {3} customerId ={5} restaurantId = {2} discountId ={1} deliveryTime="12:01:01" orderStatus = "waiting" totalPrice = {12.21} driverRating = {1}/>*/}
                {/*<CreateOrderItem orderId={1} foodId={2} quantity={7} additionalInstructions={"This is an item added from CreateOrderItem.js!"}/>*/}
                {/*<OrderItemCreateDto orderId={1} foodId={2} quantity={7} additionalInstructions={"Left boot only, no tongue"}/>*/}
                {/*<GetOrderById orderId = {1}/>*/}
            </div>
        </div>
    )
}

export default DisplayOrder