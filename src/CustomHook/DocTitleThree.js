import React, { useState } from 'react';
import useDocumentTitle from './useDocumentTitle';

function DocTitleThree() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>( Custom Hook )Count - {count}</button>
        </div>
    )
}

export default DocTitleThree
