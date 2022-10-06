import Button from 'react-bootstrap/Button';
import React from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';
import ReadOrderItem from "../ReadOrderItem";
import Food from "./RecycleBin/Food";

// <h1>{`Order: ${orderNumber}`}</h1>
// ${foodQuantity}
function ShowItem2(props) {
    const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();
    //let foodQuantity = 0;
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Food Name - Quantity: X' : 'Food Name - Quantity: X'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    This is where all the food details go<br/>
                    props<br/>
                    {props.value}<br/>
                    LoadData3<br/>
                    {LoadData3()}<br/>
                    DataItem<br/>
                    {/*<br/><DataItem/><br/>*/}
                    <br/><DataItem value={props.value} /><br/>
                    and some more details
                </div>
            </div>
        </div>
    );
}
export default ShowItem2;

class DataItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: 'pending...',
        };
    }
    render(){
        const {state} = this;
        const {testValue} = state;
        // this.loadData();
        this.dumpData();
        return(
            <div>testValue is: {testValue},
                and the prop is: {this.props.value}
            </div>

        )
    }

    loadData(){
        const { state } = this;
        const { testValue} = state;
        //this.setState({ buttonText: 'Requested!'});
        //this.setState({testValue:MutableOrderItem()});

    }

    dumpData= () => {
        const { state } = this;
        const { testValue } = state;
        // this.setState({ testValue: 'Requested!'});
        // var xhr = new XMLHttpRequest();
        // xhr.addEventListener('load',
        //     () => {
        //         console.log(xhr.responseText)
        //         this.setState({ responseDump: xhr.responseText});
        //     });
        //
        // xhr.open('GET', 'http://localhost:8080/orders/1');
        // xhr.send();
        // this.setState({ testValue: 'Done!'});
    }
}


function getFoodJson(){
    return('{"id":3,"name":"Skunk Cabbage","price":5.75,"description":"It\'s supposed to smell that way. Really.","restaurantId":1,"restaurant":1}')
}
function getTinyJson(){
    return('{"id":"test","restaurant":1}')
}
function getItemJson(){
    return('{"id":31,"orderId":1,"order":1,"foodId":3,"food":{"id":3,"name":"Skunk Cabbage","price":5.75,"description":"It\'s supposed to smell that way. Really.","restaurantId":1,"restaurant":1},"quantity":2,"additionalInstructions":"Extra Dirt","foodRating":null}');
}


function LoadData2() {
    let jsonDataObj = ReadOrderItem();
    // var myObject = JSON.parse(MutableOrderItem()); //doesn't work
    // return(myObject.id); //doesn't work
    // getFoodJson();   //works, but useless
    //return(getFoodJson());  //doesn't work
    let myObject = JSON.parse(getFoodJson());   //WORKS, ONLY FOR ID but needs spoon-fed json
    // var myObject = JSON.parse(getItemJson());   //WORKS, ONLY FOR ID but needs spoon-fed json
    //var myObject = JSON.parse(MutableOrderItem());   //doesn't work, bad JSON?
    //return(myObject); //still breaks it
    let dataObj1 = myObject.id;
    let dataObj2 = myObject.name;

    //const catcher3 = myObject.price;
    //return(new Array(myObject.id, myObject.name, myObject.restaurantId));//WORKS    this is so simple it makes me very unhappy
    //return(new Array(jsonCatch.id, jsonCatch.name, "jsonCatchEnd", myObject.restaurantId));
    return jsonDataObj.toString();
    // return("Test words");    //works but useless
    // return(MutableOrderItem()); //doesnt work
    //this.setState({ buttonText: 'Requested!'});   //works but useless
    //this.setState({testValue:MutableOrderItem()});   //doesnt work

}

//this one mostly works!
function LoadData3() {
    //MutableOrderItem();  //commenting this out sometimes makes things explode for a few seconds. let it settle and all is fine
    let myObject = new Food;
    myObject = JSON.parse(getTinyJson());
    let dataObj1 = myObject.id;
    let dataObj2 = myObject.id;
    let dataObj3 = myObject.restaurant;
    // Array:new Array(catcher3,catcher);
    //let xmlObj = XML.parse()  //nope, XML not recognized
    return(new Array(dataObj3,dataObj1));
}
