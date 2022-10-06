import React,{useEffect,useState} from 'react';
import axios from 'axios';
import '../App.css';
import DisplayOrder from "./DisplayOrder";
import NavigationBar from "./NavigationBar";
import DisplayOrderItem from "./DisplayOrderItem";
import DisplayOrderSummary from "./DisplayOrderSummary";

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


const emptyOrder = {
    "id": null,
    "customerId": null,
    "customer": null,
    "restaurantId": null,
    "restaurant": null,
    "driverId": null,
    "driver": null,
    "discountId": null,
    "discount": null,
    "status": "pending",
    "deliveryTime": null,
    "totalPrice": null,
    "driverRating": null,
    "items": []
}
// function GetOrdersByCustomer({navigation}) {
function GetOrdersByCustomer(props) {
    const [orderId, setOrderId] = useState(1);
    const [customerOrder, setCustomerOrder] = useState(globalOrder);
    const [Data, setData] = useState("")
    // const orderId = props.orderId;
    // const getOrderDto = {orderId, foodId, quantity, additionalInstructions}; //GET doesnt need a DTO, this is just here as reference
    const headers = {
        // 'Access-Control-Allow-Origin': '*',
        'This-Header-Does-Nothing': 'really',
        'Random-Experimental-Header': 'YES'
    }

    function handleItemUpdate(itemArrayElement, formQuantity)
    {

        let order = Data;
        order.items[itemArrayElement].quantity = formQuantity;

        //update state of order
        setData(order)
        console.log("order", Data)
    }


    useEffect(() => {
        axios.get('http://localhost:8080/orders/customer/' + props.customerId)
            // axios.get('http://localhost:8080/orders/' + Data.id)
            // expanded version of axios.get(...)
            // axios.get({urlAsString}, {dataObject}, {headersObject})
            // axios.get('http://76.146.4.100:8080/orders/1')
            .then(res => {
                console.log('Response from main API: ', res)
                //console.log('Order Data: ', res.data)
                // let gotOrder = res.data
                setData(res.data)
                // console.log('Expected Data: ', orderData)
                //console.log('Set? Data: ', Data)
            })
            .catch(err => {
                console.log(err);
                console.log('Error Code is: ', err.code);
                if (err.code === "ERR_NETWORK") {
                    console.log('Did you remember to start the server?')
                }
                ;
            })
    }, [props.customerId])

    function OrderArray() {
        return (
            <div>
                {
                    Data.map
                    (
                        function(dataItem, keyValue)
                        {
                            //translation: for each key (uniqueness not checked?) in the array held by props.data, do the thing, and {dataItem} is the value of the array at that element
                            return <div key={ keyValue }>{
                                // <h1> key: {keyValue}</h1>
                                // <h1>{printSomeShit(dataItem)}</h1>
                                // <MutableOrderItem itemArrayElement = {keyValue} orderItem={props.order.items[keyValue]} onItemUpdate={handleItemUpdate}/>


                                <DisplayOrderSummary
                                    itemArrayElement = {keyValue}
                                    order={Data[keyValue]}
                                    onOrderClick={props.onOrderClick}
                                    />

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
            {/*<NavigationBar navigation = {navigation}/>*/}
            <div className="row">
                <div className="bg-l-order-pane col-12">
                    {Data===""
                        ? <NoOrders/>
                        // : <OrderArray/>
                        : <div>
                            <h4>Not Empty</h4>
                        <br/>
                            {/*<DisplayOrderSummary order={Data[0]}/>*/}
                            <OrderArray/>
                        </div>
                    }
                </div>
                {/*<DisplayOrder order={Data} passItemUpdate={handleItemUpdate}/>*/}
                {/*<h3> The value of Data.id is {Data.id}</h3>*/}
                {/*{console.log('imported data: ',Data)}*/}
                {/*{console.log('imported object: ',Data)}*/}
                {/*{console.log('is array?: ', Array.isArray(Data.items))}*/}
                {/*{Array.isArray(Data.items) &&*/}
                {/*     <h1>{Data.items[0].food.name}</h1>*/}
                {/* }*/}
            </div>
        </div>
    )

}
export default GetOrdersByCustomer;



function NoOrders() {
    return (
        <div>
            {/*<NavigationBar navigation = {navigation}/>*/}
                <div className="bg-l-order-pane col-12">
                    <h4> Empty</h4>
            </div>
        </div>
    )

}
//*************       saved for reference ***********************//

// const GetOrderById=()=>{
//     // const { state } = this;
//     const [Data,setData]=useState({Order:''})
//     const [colorsData,setColorsData]=useState([])
//     useEffect(()=>{
//         // axios.get('http://localhost:8080/orders/1')
//         axios.get('http://76.146.4.100:8080/orders/1')
//             .then(res=>{
//                 console.log('Response from main API: ',res)
//                 console.log('Order Data: ',res.data)
//                 // console.log('Test Data: ',res.data.data[3].name, res.data.data[0].color, 'end test Data')
//                 // let flowerData=res.data.data[1]
//                 // setData({Flower:flowerData.name, RGB:flowerData.color}) //this line claims to be invalid types, but is working anyway (for now)
//                 let orderData=res.data
//                 // setData({Flower:flowerData[1].name, RGB:flowerData[2]}) //this breaks it, as do similar variations. seems both items must be the same type?
//                 // setData({Flower:flowerData[1].name, RGB:'words'}) //also works
//                 // setData({Order:orderData.items[0].food}) //works, but cant print/render Flower or RGB without calling members/elements
//                 setData({Order:orderData}) //works, but cant print/render Flower or RGB without calling members/elements
//                 console.log('Expected Data: ',orderData)
//                 console.log('Set? Data: ',Data)
//             })
//             .catch(err=>{
//                 console.log(err);
//             })
//     },[])
//     return(
//         <>
//             {console.log('imported data: ',Data)}
//             {console.log('imported object: ',Data.Order)}
//             {console.log('is array?: ', Array.isArray(Data.Order.items))}
//             {Array.isArray(Data.Order.items) &&
//                 <h1>{Data.Order.items[1].food.name}</h1>
//             }
//         </>
//     )
// }