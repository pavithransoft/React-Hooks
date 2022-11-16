import React, { useState, useEffect } from 'react';

function FunctionalCounter() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('Updating Document Title')
        document.title = `Clicked ${count} Times`
    }, [ count ])
    return ( 
        <div>
            <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count + 1)}>Clicked {count} Times</button>
        </div>
     );
}

export default FunctionalCounter;