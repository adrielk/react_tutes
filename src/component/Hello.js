import React from 'react';//react is responsible for JSX!!!, so we need it always

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Adriel!1!</h1>
    //     </div>
    // );

    //without jsx :()
    return React.createElement(
        'div',
        {id: 'hello', className:'dummy thicc'},
        React.createElement('h1',null,'HELLO ADRIEL')
        )
}
export default Hello