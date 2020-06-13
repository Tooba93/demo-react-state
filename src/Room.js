
import React, {useState} from 'react';

function Room() {
    //const state = useState (true);
     let[isLit, setLit] = useState(false);
     let[age , setAge] = useState(23);
    
    function updateLit(){
        console.log("Button clicked");
        setLit(!isLit);
        //isLit = !isLit;   
    }
    function increaseAge(){
        console.log ("increaseAge ");
        setAge(++age);
    }

  return (
     <div>
       This Room is  {isLit ? 'lit' : 'dark'}
       <br/>
       AGe: {age}
       <br/>
       <button onClick={updateLit} > Toggle Light </button>
       <button onClick={increaseAge} >Increase Age </button>
     </div>
  );
}

export default Room;