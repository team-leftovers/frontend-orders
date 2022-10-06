import {Text, View} from "react-native";
import NavigationBar from "../Components/NavigationBar";
import Button from "react-bootstrap/Button";
import * as React from "react";
import DisplayOrderSummary from "../Components/DisplayOrderSummary";
import GetOrdersByCustomer from "../Components/GetOrdersByCustomer";
import {useState} from "react";


function PseudoLogin({ navigation }) {
    const [customerId, setCustomerId] = useState(0);

    function handleChange(event){
        setCustomerId(event.target.value)
    }

    function handleClick(event){
        navigation.navigate('CustomerOrders', {customerId:customerId});
    }
return(
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
            {/*<NavigationBar navigation = {navigation}/>*/}
            <h1>Placeholder Login Screen!</h1>
            <form>Customer Id: &nbsp;
                <label>
                <input
                    type="number"
                    value = {customerId}
                    // onChange={(e) => setQuantity(e.target.value)}
                    onChange={(event) =>handleChange(event)}
                />
                </label>
            </form>
            <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClick}
            >
                Log In
            </button>
        </View>
)
}

export default PseudoLogin