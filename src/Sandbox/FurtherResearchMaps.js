import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Sandbox from "./Sandbox";

function extraComments(props) {
    return (
        <div>
            {
                props.data.map
                (
                    function(dataItem, keyValue)
                    {
                        //translation: for each key (uniqueness not checked?) in the array held by props.data, do the thing, and {dataItem} is the value of the array at that element
                        return <div key={ keyValue }>{
                            <h1>{dataItem}</h1>
                        }</div>;
                    }
                )
            }
        </div>
    )}
function FurtherResearchMaps(props) {
    return (
        <div>
            {
                // canYouMapIt(props.data, "test")
                props.data.map(canYouMapIt)
                // props.data.map
                // (
                //     function(filbert, mollywobbles)
                //     {
                //         return <h1 key={ mollywobbles }>{filbert}</h1>;
                //     }
                // )
            }
        </div>
    )}
function canYouMapItA(a,b)
{
    return <h1 key={ b }>{a}</h1>
}
function canYouMapItB(b,a)
{
    return <h1 key={ b }>{a}</h1>
}

export default FurtherResearchMaps;