import {Text, View} from "react-native";
import * as React from "react";
import Button from "react-bootstrap/Button";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBar from "../Components/NavigationBar";

function Sandbox({ route, navigation }) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <NavigationBar navigation = {navigation}/>
            <Text>YOUR NUMBER IS: {route.params.orderId}<br/>Second Line<br/>Explosion</Text>



        </View>
    );

    function handleDetailsButtonClick()
    {
        navigation.navigate('Details')
    }
    function handleHomeButtonClick()
    {
        navigation.navigate('Home')
    }
    function handleSandboxButtonClick()
    {
        navigation.navigate('Box')
    }
}

export default Sandbox