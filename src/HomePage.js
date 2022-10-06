import React from 'react';
import './App.css';

import Sandbox from "./Sandbox/Sandbox";
import GetOrderById from "./Components/GetOrderById";
import DataFetch from "./Sandbox/RecycleBin/DataFetch";
import Collapsible from "./Sandbox/RecycleBin/Collapsible";
import {CreateOrderItem} from "./Components/CreateOrderItem";
import CreateOrder from "./Components/CreateOrder";
import UpdateOrder from "./Components/UpdateOrder";
import DeleteOrder from "./Components/DeleteOrder";
import MutableOrderItem from "./Components/MutableOrderItem";
import FoodDataBox from "./Sandbox/RecycleBin/FoodDataBox";
import DisplayOrder from "./Components/DisplayOrder";
//console.log(data);

// function App() {
const globalItemArray = [
    {
        "id": 4,
        "orderId": 2,
        "order": 2,
        "foodId": 1,
        "food":
            {
                "id": 1,
                "name": "Food-ish Stuff",
                "price": 13.99,
                "description": "This might be food. Maybe",
                "restaurantId": 1,
                "restaurant": 1
            },
        "quantity": 2,
        "additionalInstructions": "with fried leg",
        "foodRating": 3
    },
    {
        "id": 1,
        "orderId": 1,
        "order": 1,
        "foodId": 1,
        "food":
            {
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
        "additionalInstructions": "no thanks",
        "foodRating": 2
    }]


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemUpdate = this.handleItemUpdate.bind(this);

        this.state = {
            buttonClassName:'btn btn-primary',
            buttonClassName2:'btn btn-primary',
            buttonText: 'State A',
            buttonText2: 'State A',
            orderNumber: 'pending...',
            responseDump: 'empty',
            idBox:1,
            itemArray: globalItemArray,
        };
    }
    render() {
        const {state} = this;
        // const {buttonClassName, buttonClassName2, buttonText, buttonText2, orderNumber, responseDump,idBox} = state;
        const {idBox, itemArray} = state;

        const thisThing = "impossible"

        const myArray = ["Jake", "Jon", "Thruster", "LordGodRocko", "Jon", "Jon", "jon"];
        const testyArray = [{data1:"apple", data2:"orange"},{data1:"corpulent", data2: "3"}, {data1:"three", data2:"two"}]


        return (
            <div className="container-fluid" id="main-content">
                <section tabIndex="-1">
                    <div className="row">
                        <div className="bg-l-buffer col-2"></div>
                        <div className="bg-l-buffer col-8 px-5">
                            <br/>
                        </div>
                        <div className="bg-l-buffer col-2"></div>
                    </div>
                    {/*<div className="row">*/}
                    {/*    <div className="bg-l-buffer col-2"></div>*/}
                    {/*    <div className="bg-l-order-pane col-8 px-5">*/}
                    {/*        New Test Space <br/>*/}
                    {/*        /!*<FoodDataBox/>*!/*/}
                    {/*    </div>*/}
                    {/*    <div className="bg-l-buffer col-2"></div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="bg-l-buffer col-2"></div>
                        <div className="bg-l-buffer col-8 px-5">
                            <br/>
                        </div>
                        <div className="bg-l-buffer col-2"></div>
                    </div>
                    <div className="row">
                        <div className="bg-l-buffer col-2"></div>
                        <div className="bg-l-order-pane col-8 px-5">
                            <Sandbox/>

                            {/*<GetOrderById/>*/}
                            {/*<MutableOrderItem itemArrayElement = {0} orderItem={itemArray[0]} onItemUpdate={this.handleItemUpdate}/>*/}
                            {/*<MutableOrderItem itemArrayElement = {1} orderItem={itemArray[1]} onItemUpdate={this.handleItemUpdate}/>*/}
                            {/*<MutableOrderItem itemArrayElement = {2} orderItem={itemArray[2]} onItemUpdate={this.handleItemUpdate}/>*/}

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
                        <div className="bg-l-buffer col-2"></div>
                    </div>
                </section>
            </div>
        );
    }

    // itemArray:globalItemArray,
//make the changes to itemArray stateful object
    handleItemUpdate(itemArrayElement,orderItem, formQuantity)
    // handleItemUpdate(event)
    {
        const { state } = this;
        const { itemArray } = state;
        console.log("element", itemArrayElement)
        console.log("order again", orderItem)
        orderItem.quantity = formQuantity;
        // let myElement = event.target.attributes.element;
        // let myItem = orderItem;
        let myArray = itemArray;
        myArray[itemArrayElement] = orderItem;
        console.log("input array", myArray)
        this.setState({itemArray:myArray})
        console.log("output array", itemArray)
    }



    handleButtonClick = () => {
        const { state } = this;
        const { buttonText } = state;
        this.setState({ buttonText: buttonText === 'State A' ? 'State B' : 'State A'})
    };
    handleButtonMouseEnter = () => {
        this.setState({
            buttonClassName: 'btn btn-success'
        })
    };
    handleButtonMouseLeave = () => {
        this.setState({
            buttonClassName: 'btn btn-primary'
        })
    };

    getData= () => {
        const { state } = this;
        const { buttonText } = state;
        this.setState({ buttonText: 'Requested!'});
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',
            () => {
                console.log(xhr.responseText);
                console.log(xhr.responseText);
                this.setState({ buttonText: xhr.responseText});
            });
        xhr.open('GET', 'http://localhost:8080/orders/heartbeat');

        xhr.send();
        this.setState({ buttonText: 'Done!'});
    }

    dumpData= () => {
        const { state } = this;
        const { buttonText2, responseDump } = state;
        this.setState({ buttonText: 'Requested!'});
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',
            () => {
                console.log(xhr.responseText)
                this.setState({ responseDump: xhr.responseText});
            });

        xhr.open('GET', 'http://localhost:8080/orders/1');
        xhr.send();
        this.setState({ buttonText: 'Done!'});
    }

    renderDataFetch(i) {
        return <DataFetch />;
    }

    renderCollapsible() {
        return (
            <Collapsible/>
        );
    }
}







export default HomePage;