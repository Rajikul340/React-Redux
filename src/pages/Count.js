import React, { useReducer, useState } from "react";


const Count = () => {

const initialState =0;

const reducer = (state, action) =>{
    console.log(action);
    if(action.type === "INCREMENT"){
        return state-action.payload;
    } 
    else if(action.type === "DECREMENT"){
        return state +action.payload;
    }

}

 const [state, dispatch] = useReducer(reducer, initialState)

  return (

      <div className=" w-64 mx-auto  mt-32">
      <div className="border w-48 h-40  border-green-300 my-4">
        <p className="text-center">{state}</p>
      </div>
      <div className="border w-48 h-40 border-green-300 ">
      <p className="text-center">{state}</p>
        <div className="mt-32 mx-3">
             
          <button
          onClick={()=>dispatch({type:"DECREMENT", payload: 5})}
           className="border mr-3 border-teal-400 bg-green-800 text-white">
            Decrement
          </button>
          <button
         onClick={()=>dispatch({type:"INCREMENT", payload:5})}
           className="border border-teal-400 bg-gray-800 text-white">
            increment
          </button>
        </div>
      </div>

  </div>
  );
};

export default Count;
