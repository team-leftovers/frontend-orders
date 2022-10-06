import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Flowers=()=>{
    // const { state } = this;
    const [Data,setData]=useState({
        Flower:'',
        RGB:''
    })
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
            .then(res=>{
                console.log('Response from main API: ',res)
                console.log('Flowers Data: ',res.data.data[2], 'end Flowers Data')
                console.log('Test Data: ',res.data.data[3].name, res.data.data[0].color, 'end test Data')
                // let flowerData=res.data.data[1]
                // setData({Flower:flowerData.name, RGB:flowerData.color}) //this line claims to be invalid types, but is working anyway (for now)
                let flowerData=res.data.data
                // setData({Flower:flowerData[1].name, RGB:flowerData[2]}) //this breaks it, as do similar variations. seems both items must be the same type?
                // setData({Flower:flowerData[1].name, RGB:'words'}) //also works
                setData({Flower:flowerData[1], RGB:flowerData[0]}) //works, but cant print/render Flower or RGB without calling members/elements
                console.log('Colors Data: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <h1>{Data.Flower.name}</h1>
            <p>{Data.Flower.color}</p>
            {/*<p>{Data.RGB}</p>*/}
            <h1>{Data.RGB.name}</h1>
            <p>{Data.RGB.color}</p>
            {/*<Colors data={colorsData}/>*/}
        </>
    )
}

export default Flowers;