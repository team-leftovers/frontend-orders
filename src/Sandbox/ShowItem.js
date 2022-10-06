import Button from 'react-bootstrap/Button';
import React from 'react';
import useCollapse from 'react-collapsed';
import '../App.css';
import ReadOrderItem from "../ReadOrderItem";
import Food from "./RecycleBin/Food";

// <h1>{`Order: ${orderNumber}`}</h1>
// ${foodQuantity}
function ShowItem(props) {
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
                    {/*<br/><DataItem value={props.value} /><br/>*/}
                    {LoadData3()}<br/>
                    {/*LoadData5<br/>*/}
                    {/*{LoadData5}<br/>*/}
                    {/*{LoadData5()}<br/>*/}
                    {/*{LoadData5.render()}<br/>*/}
                    {/*{LoadData5.displayData()}<br/>*/}
                    {/*LoadData6<br/>*/}
                    {/*{LoadData6()}<br/>*/}
                    {/*LoadData7<br/>*/}
                    {/*{LoadData7()}<br/>*/}
                    and some more details
                </div>
            </div>
        </div>
    );
}
export default ShowItem;

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
        this.loadData();
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
}


function getFoodJson(){
    return('{\"id\":3,\"name\":\"Skunk Cabbage\",\"price\":5.75,\"description\":\"It\'s supposed to smell that way. Really.\",\"restaurantId\":1,\"restaurant\":1}')
}
function getTinyJson(){
    return('{\"id\":\"test\",\"restaurant\":1}')
}
function getItemJson(){
    return('{\"id\":31,\"orderId\":1,\"order\":1,\"foodId\":3,\"food\":{\"id\":3,\"name\":\"Skunk Cabbage\",\"price\":5.75,\"description\":\"It\'s supposed to smell that way. Really.\",\"restaurantId\":1,\"restaurant\":1},\"quantity\":2,\"additionalInstructions\":\"Extra Dirt\",\"foodRating\":null}');
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

class LoadData4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {state} = this;
        const {someData} = state;
        this.getData();
        return (someData);
    }
    getData= () => {
        const { state } = this;
        const { someData } = state;
        this.setState({someData: 'Requested!'});
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load',
            () => {
                console.log(xhr.responseText);
                console.log(xhr.responseText);
                this.setState({ someData: xhr.responseText});
            });
        xhr.open('GET', 'http://localhost:8080/orders/heartbeat');

        xhr.send();
        //this.setState({ someData: 'Done!'});
        this.setState( 'Done!');
    }
}
class LoadData5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {testData: "testData"}
    }

    render() {
        return(this.testData);
    }
    displayData()
    {
        return this.testData;
    }
}

function LoadData6() {
    // getData= () => {
    // const { state } = this;
    // const { someData } = state;
    // this.setState({someData: 'Requested!'});
    let dataObject = "Initial Data"
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load',
        () => {
            console.log(xhr.responseText);
            console.log(xhr.responseText);
            // this.setState({ someData: xhr.responseText});
            dataObject = xhr.responseText;
        });
    xhr.open('GET', 'http://localhost:8080/orders/heartbeat');
    dataObject = "Intermediate Data";
    xhr.send();
    //this.setState({ someData: 'Done!'});
    //return("Done");
    return(dataObject);
}

function LoadData7() {
    var xmlhttp = new XMLHttpRequest();
    var url = "myTutorials.txt";
    var dataOut = "initialVal"
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //var myArr = JSON.parse(this.responseText);
            var myArr = this.responseText;
            dataOut = myFunction(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
        return(arr);
        }
        // document.getElementById("id01").innerHTML = out;

    return (dataOut);
}

// <script>
//     var xmlhttp = new XMLHttpRequest();
//     var url = "myTutorials.txt";
//
//     xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//     var myArr = JSON.parse(this.responseText);
//     myFunction(myArr);
// }
// };
//     xmlhttp.open("GET", url, true);
//     xmlhttp.send();
//
//     function myFunction(arr) {
//     var out = "";
//     var i;
//     for(i = 0; i < arr.length; i++) {
//     out += '<a href="' + arr[i].url + '">' +
//     arr[i].display + '</a><br>';
// }
//     document.getElementById("id01").innerHTML = out;
// }
// </script>


// class ShowItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             buttonClassName: 'btn btn-primary',
//             buttonText: 'Ex-Square',
//             responseDump: 'pending...',
//         };
//     }
//     render() {