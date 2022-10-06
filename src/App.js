
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
import HomePage from "./HomePage";
//console.log(data);

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Button from "react-bootstrap/Button";
import NavigationBar from "./Components/NavigationBar";
import ExampleScreen from "./Sandbox/ExampleScreen";
import GetOrdersByCustomer from "./Components/GetOrdersByCustomer";
import DisplayOrderSummary from "./Components/DisplayOrderSummary";
import YourOrders from "./Screens/YourOrders";
import GetOrderDetails from "./Screens/OrderDetails";
import PseudoLogin from "./Screens/PseudoLogin";

function HomeScreen({ route, navigation }) {
    return (
        // including "flex: 1," does weird shit
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <NavigationBar navigation={navigation} customerId = {route.params.customerId}/>
            <Text>Home Screen</Text>
            <Button
                className={'btn btn-secondary'}
                onClick={handleButtonClick}
                // title="Go to Details"
                // onPress={() => navigation.navigate('Details')}
                >
                Go to Details
            </Button>
            <Button
                className={'btn btn-secondary'}
                onClick={handleSandboxButtonClick}
                // title="Go to Details"
                // onPress={() => navigation.navigate('Details')}
                >
                Go to Sandbox
            </Button>
        </View>
    );

    function handleButtonClick(){
        navigation.navigate('Details')
    };
    function handleSandboxButtonClick(){
        navigation.navigate('Box')
    };

    function handleHomeButtonClick(){
        navigation.navigate('Home')
    };
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>{
            // <div>
            //     <HomePage/>
            //     <HomePage/>
            // </div>

            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen}
                              options={{ title: 'Overview' }}
                />
                <Stack.Screen name="Cart" component={GetOrderById} />
                {/*<Stack.Screen name="Cart" component={ExampleScreen} />*/}
                <Stack.Screen name="Sandbox" component={Sandbox} />
                <Stack.Screen name="CustomerOrders" component={YourOrders} />
                <Stack.Screen name="OrderDetails" component={GetOrderDetails} />
                <Stack.Screen name="Login" component={PseudoLogin} />
                {/*<Stack.Screen name="Sandbox" component={ExampleScreen} />*/}
                {/*DisplayOrderSummary*/}
            </Stack.Navigator>

        }</NavigationContainer>
    );
}
//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//         };
//     }
//     render() {
//         return(
//             <div>
//                 <HomePage/>
//                 <HomePage/>
//             </div>
//
//         );
//     }
// }
//
export default App;

