import React,{useEffect,useState} from 'react';
import axios from 'axios';

const GetOrderById=()=>{
    const [Data, setData] = useState({Order:''})
    const orderId = 2;
    // const getOrderDto = {orderId, foodId, quantity, additionalInstructions}; //GET doesnt need a DTO, this is just here as reference
    const headers = {
        // 'Access-Control-Allow-Origin': '*',
        'This-Header-Does-Nothing': 'really',
        'Random-Experimental-Header': 'YES'
    }
    useEffect(()=>{
        axios.get('http://localhost:8080/orders/' + orderId)
            // expanded version of axios.get(...)
            // axios.get({urlAsString}, {dataObject}, {headersObject})
            // axios.get('http://76.146.4.100:8080/orders/1')
            .then(res=>{
                console.log('Response from main API: ', res)
                console.log('Order Data: ', res.data)
                let orderData = res.data
                setData({Order:orderData}) //works, but cant print/render Flower or RGB without calling members/elements
                console.log('Expected Data: ', orderData)
                console.log('Set? Data: ', Data)
            })
            .catch(err=>{
                console.log(err);
                console.log('Error Code is: ', err.code);
                if(err.code === "ERR_NETWORK"){console.log('Did you remember to start the server?')};
            })
    },[])
    return(
        <>
            {console.log('imported data: ',Data)}
            {console.log('imported object: ',Data.Order)}
            {console.log('is array?: ', Array.isArray(Data.Order.items))}
            {Array.isArray(Data.Order.items) &&
                <h1>{Data.Order.items[0].food.name}</h1>
            }
        </>
    )
}

export default GetOrderById;



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