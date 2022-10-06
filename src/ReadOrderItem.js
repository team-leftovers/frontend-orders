import React,{useState,useEffect} from 'react';
import './App.css';

function ReadOrderItem() {
    const [data,setData]=useState([]);
    const getData=()=>{
        fetch('DemoItem.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                //String myObject = JSON.parse(response, 'id');
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="ReadJson">
            {
                data && data.length>0 && data.map((item)=><p>{item.about}</p>)
            }
        </div>
    );
}

export default ReadOrderItem;