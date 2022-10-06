import {Text, View} from "react-native";
import NavigationBar from "../Components/NavigationBar";
import Button from "react-bootstrap/Button";
import * as React from "react";
import DisplayOrderSummary from "../Components/DisplayOrderSummary";
import GetOrdersByCustomer from "../Components/GetOrdersByCustomer";
import {useState} from "react";


function YourOrders({route, navigation}) {
    const [customerId, setCustomerId] = useState(route.params.customerId);

    function handleChange(event) {
        if(event.target.value < 0)
        {
            return;
        }
        setCustomerId(event.target.value);
        // console.log("order", order);

        //call as render (React?) object vs call as function
        {/*<GetOrderById orderId = {1} onItemUpdate={this.handleItemUpdate}/>*/
        }
        console.log("Get New Customer!");
        // GetOrderById( {orderId: myOrder, onGotOrder:handleOrderUpdate})
        console.log("customer", event.target.value);
        // <GetOrderById orderId = {orderId}/>

        //for some reason the updates from setOrder don't propagate reliably
        // props.onItemUpdate(props.itemArrayElement, orderItem);

    }

    function handleOrderClick(orderId){
            navigation.navigate('OrderDetails', {orderId:orderId});
    }

    return (
        // including "flex: 1," does weird shit
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <NavigationBar navigation={navigation} customerId = {customerId}/>
            <h6>Customer Id: {customerId}</h6>
            <h4>Your Orders:</h4>

            {/*<DisplayOrderSummary order = {globalOrder}/>*/}
            <GetOrdersByCustomer customerId = {customerId} onOrderClick = {handleOrderClick}/>
        </View>
    );
}

    export default YourOrders