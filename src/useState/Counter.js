import React, { useState } from 'react';
function Counter() {
    const initialCount = 0;
    const [count, setCount] = useState( initialCount );

    const handleDecrement =()=>{
        for(let i=0;i<5;i++){
            setCount (prevCount => prevCount + 1)
        }
    }
    return ( 
        <div>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(initialCount)} >Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={handleDecrement}>five</button>
        </div>
     );
}

export default Counter;