import React from 'react';

/*
function Greet(){
    return <h1>Hello Adriel Kim</h1>;
}*/

//a way to destructure props as params
//const Greet = ({name, heroName, children}) => {
const Greet = (props) => {
    //console.log(props)
    const {name, heroName, children} = props
    return (//note that only only html element can be returned. WE can work araound this by grouping every in a div tag
        <div>
            <h1>Hello {name} a.k.a {heroName}, Fat arrow syntax form, a JS thing...</h1>
            {children}
        </div>
        )
}//any arrow function more than 1 line, then need a return
export default Greet//must export so as to be able to import