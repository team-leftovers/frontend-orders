import {Text, View} from "react-native";
import * as React from "react";
import Button from "react-bootstrap/Button";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationBar from "../Components/NavigationBar";

function ExampleScreen({ navigation }) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center' }}>
            <NavigationBar navigation = {navigation}/>
            <Text>Home Screen<br/>Second Line<br/>Explosion</Text>

            <Button
                className={'btn btn-secondary'}
                onClick={handleHomeButtonClick}
                // title="Go to Details"
                // onPress={() => navigation.navigate('Details')}
            >
                Go to Home

            </Button>  <Button
            className={'btn btn-secondary'}
            onClick={handleDetailsButtonClick}
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

export default ExampleScreen