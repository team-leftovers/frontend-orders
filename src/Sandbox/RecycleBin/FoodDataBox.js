import React, {useEffect, useState} from 'react';
import useCollapse from 'react-collapsed';
import '../../App.css';


export default FoodDataBox;

function FoodDataBox() {
    const [isExpanded, setExpanded] = useState(false);
    const [randomCrap, setCrap] = useState(0);
    const [jsonData, setJson] = useState(getFood2Json);
    const [readyData, parseData] = useState('Empty');
    // const [readyData, parseData] = useState(JSON.parse(name="unselected food"));
    // let dataGotter = <DataGetter number="2"/>
    // let [dataGotter, setGotter] = useState(<DataGetter number="2"/>)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleOnClick() {
        // Do more stuff with the click event!
        setExpanded(!isExpanded);
        //upData();
    }

    function startTest(){
        upData();
        upData();
    }
    function upData(){
        setCrap(randomCrap + 1);
        setJson(getFoodJson());
        parseData(JSON.parse(jsonData));
    }

    return (

        <div className="collapsible" onLoadStart={upData} onMouseLeave={upData}>
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                 update count: {randomCrap}  {readyData.name}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {showFood(readyData)}
                </div>
            </div>
        </div>
    );

}

function showFood(jsonIn) {
    return (
        <div>
            id: {jsonIn.id} <br/>
            {/*name: {jsonIn.name} <br/>*/}
            {/*quantity: {jsonIn.quantity} <br/>*/}
            price: {jsonIn.price} <br/>
            description: {jsonIn.description} <br/>
            restaurant Id: {jsonIn.restaurantId} <br/>
            restaurant: {jsonIn.restaurant} <br/>
        </div>
    )
}
function getTinyJson(){
    return('{"id":"test","restaurant":1}')
}

function getFoodJson(){
    return('{"id":3,"name":"Skunk Cabbage","price":5.75,"description":"It\'s supposed to smell that way. Really.","restaurantId":1,"restaurant":1}')
}
function getFood2Json(){
    return('{"id":3,"name":"FOOD ITEM DEFAULT","price":5.75,"description":"It\'s supposed to smell that way. Really.","restaurantId":1,"restaurant":1}')
}
let testArray = ['words 1', 'words 2', 'three words', 'no auto'];

function getItemJson() {
    return ('{"id":1,"orderId":1,"order":1,"foodId":1,"food":{"id":1,"name":"Food-ish Stuff","price":13.99,"description":"This might be food. Maybe","restaurantId":1,"restaurant":1},"quantity":5,"additionalInstructions":"Extra Dirt","foodRating":5}')
}

function getOrderJson() {
    return ('{"id":1,"customerId":1,"customer":1,"restaurantId":1,"restaurant":1,"driverId":3,"driver":3,"discountId":4,"discount":4,"status":"delivery","deliveryTime":"03:03:00","totalPrice":88.45,"driverRating":3,"items":[{"id":1,"orderId":1,"order":1,"foodId":1,"food":{"id":1,"name":"Food-ish Stuff","price":13.99,"description":"This might be food. Maybe","restaurantId":1,"restaurant":1},"quantity":5,"additionalInstructions":"Extra Dirt","foodRating":5},{"id":2,"orderId":1,"order":1,"foodId":2,"food":{"id":2,"name":"Old Boot","price":1.00,"description":"Hard-boiled boot. Not tasty.","restaurantId":1,"restaurant":1},"quantity":7,"additionalInstructions":null,"foodRating":null},{"id":31,"orderId":1,"order":1,"foodId":3,"food":{"id":3,"name":"Skunk Cabbage","price":5.75,"description":"It\'s supposed to smell that way. Really.","restaurantId":1,"restaurant":1},"quantity":2,"additionalInstructions":"Extra Dirt","foodRating":null}]}')
}
function upDatable(inNumb) {
    return (
        <div>
            testValue is: {testArray[inNumb]}, <br/>
            dataIndex is: {inNumb}, <br/>
        </div>
    )
}

function xshowFood(jsonIn) {
    return (
        <div>
            id: {jsonIn.items[0].food.id} <br/>
            {/*name: {jsonIn.name} <br/>*/}
            quantity: {jsonIn.items[0].quantity} <br/>
            price: {jsonIn.items[0].price} <br/>
            description: {jsonIn.items[1].description} <br/>
            restaurant Id: {jsonIn.items[0].restaurantId} <br/>
            restaurant: {jsonIn.items[0].restaurant} <br/>
        </div>
    )
}
//
// function upDatable2(inNumb) {
//     const [testValue, setValue] = useState(testValue[inNumb]);
//     const [dataIndex, setIndex] = useState(inNumb);
//
//         return (
//             <div>
//                 testValue is: {testValue},  <br/>
//                 dataIndex is: {dataIndex},  <br/>
//             </div>
//         )
//
//     function handleClick(){
//         this.changeDisplay()
//     }
//     function changeDisplay(b){
//         const {state} = this;
//         const {testValue, dataIndex} = state;
//         this.setState({dataIndex: b})
//         this.setState({testValue: testArray[b]})
//         // return (<DataGetter number={b}/>)
//     }
//
// }


class DataGetter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: testArray[this.props.number],
            dataIndex: this.props.number,
            // testValue: testArray[3],
        };
    }

    handleButtonClick = () => {
        const { state } = this;
        const { buttonText } = state;
        this.setState({dataIndex: 1})
        this.setState({testValue: "WORDS"})
    };
    render() {
        const {state} = this;
        const {testValue, dataIndex} = state;
        //this.setState({testValue: "String Literal"});
        // this.loadData();
        return (
            <div>
                testValue is: {testValue},  <br/>
                dataIndex is: {dataIndex},  <br/>
            </div>

        )
    }
    handleClick(){
        this.changeDisplay()
    }
    changeDisplay(b){
        const {state} = this;
        const {testValue, dataIndex} = state;
        this.setState({dataIndex: b})
        this.setState({testValue: testArray[b]})
    }
    // getData = () => {
    //     const {state} = this;
    //     const {testValue} = state;
    //     // this.setState({ testValue: 'Requested!'});
    //     // var xhr = new XMLHttpRequest();
    //     // xhr.addEventListener('load',
    //     //     () => {
    //     //         console.log(xhr.responseText)
    //     //         this.setState({ responseDump: xhr.responseText});
    //     //     });
    //     //
    //     // xhr.open('GET', 'http://localhost:8080/orders/1');
    //     // xhr.send();
    //     // this.setState({ testValue: 'Done!'});
    // }
}





//
// function FoodDataBox() {
//     const [isExpanded, setExpanded] = useState(false);
//     const [randomCrap, setCrap] = useState(0);
//     const [jsonData, setJson] = useState('Pre-Data');
//     const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});
//
//     function handleOnClick() {
//         // Do more stuff with the click event!
//         // Or, set isExpanded conditionally
//
//         // randomCrap++;
//         // randoCrap++;
//         // doRandomCrap(!randomCrap);
//         setCrap(randomCrap + 1);
//         setJson(getTinyJson());
//         setExpanded(!isExpanded);
//     }
//
//     return (
//         <div className="collapsible">
//             <div className="header" {...getToggleProps({onClick: handleOnClick})}>
//                 {isExpanded ? 'Collapse' : 'Expand'}
//                 {" randomCrap = "}
//                 {randomCrap}
//                 {"Held data = "}
//                 {jsonData}
//
//             </div>
//             <div {...getCollapseProps()}>
//                 <div className="content">
//                     Now you can see the hidden content. <br/>
//                     <DataGetter
//                         // onClick={this.handleClick}
//                         decoy={"Is this a plane?"}
//                         number = {randomCrap}
//                     /><br/>
//                     Click again to hide...
//                 </div>
//             </div>
//         </div>
//     );
//
// }



function FoodDataBox3() {
    const [isExpanded, setExpanded] = useState(false);
    const [randomCrap, setCrap] = useState(0);
    const [jsonData, setJson] = useState('Pre-Data');
    // let dataGotter = <DataGetter number="2"/>
    // let [dataGotter, setGotter] = useState(<DataGetter number="2"/>)
    const {getCollapseProps, getToggleProps} = useCollapse({isExpanded});

    function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally

        // randomCrap++;
        // randoCrap++;
        // doRandomCrap(!randomCrap);
        setCrap(randomCrap + 1);
        setJson(getTinyJson());
        setExpanded(!isExpanded);
        // let testo = <DataGetter number="1"/>
        // dataGotter = testo;
        // setGotter(dataGotter);
        // dataGotter.changeDisplay(1);
        // setGotter(null)
        // setGotter(<DataGetter number={randomCrap}/>)
        // setGotter(<DataGetter number="1"/>)
    }

    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? 'Collapse' : 'Expand'}
                {" randomCrap = "}
                {randomCrap}
                {"Held data = "}
                {jsonData}
                <br/>
                {showFood()}
                {/*{upDatable(randomCrap)} /!*works*!/*/}
                {/*<DataGetter number={randomCrap}/>*/}
                {/*{dataGotter}*/}
                {/*<DataGetter number ="3" onClick={DataGetter.handleButtonClick}/>*/}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {"Held data = "}
                    {jsonData}<br/>
                    {/*b{DataUpdater()}*/}
                    {/*<DataGetter*/}
                    {/*    number = {randomCrap}*/}
                    {/*    onMouseOver = {this.changeContents({randomCrap})}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>
    );

}

function FoodDataBox2() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    let someData = "initial value";
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                {isExpanded ? 'Collapse' : 'Expand'}
                {/*this is where you add data to the header bar*/}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    Now you can see the hidden content. <br/>
                    {someData}<br/>
                    Click again to hide...
                </div>
            </div>
        </div>
    );
}
