import React from 'react';
import {useSelector} from 'react-redux';

function Output(){
    const counter=useSelector((state)=>state.counter);
    return (
        <div>
            <h1>{counter}</h1>
        </div>
    )
}
export default Output;