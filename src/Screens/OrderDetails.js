import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../App.css';
import DisplayOrder from "../Components/DisplayOrder";
import NavigationBar from "../Components/NavigationBar";
import GetOrderById from "../Components/GetOrderById";
import {View} from "react-native";

function GetOrderDetails({route, navigation}) {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <div>
                <NavigationBar navigation={navigation}/>
                <div className="row">
                    {/*<DisplayOrder order={route.params}/>*/}
                    <GetOrderById orderId={route.params.orderId}/>
                </div>
            </div>
        </View>
    )

}

export default GetOrderDetails;


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