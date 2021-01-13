import React from 'react'

function FunctionClick() {
    //in js, we can define another function within

    function clickHandler() {
        console.log('cllick')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click boi</button>
        </div>
    )
}

export default FunctionClick
