import React, { useState } from 'react';

function FunctionalCounter() {

    const [count, setCount] = useState(0)

    console.log(count,'Counter Increased');

    return ( 
        
        <button onClick={() => setCount(count + 1)}>Count : {count}</button>
     );
}

export default FunctionalCounter;