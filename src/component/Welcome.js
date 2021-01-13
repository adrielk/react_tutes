//creating a class component:
//class vs functional: "stateful", can contain complex logic, lifecycle hooks, "this" keyword
import React, { Component } from 'react';

//demonstrating props for class components: this.props
//note that, props are immutable. we cannot change them
class Welcome extends Component{
    render(){
    const {name, heroName} = this.props    
    //const {state1, state2} = this.state destructing state syntax.
    return<h1>Welcome {name} a.k.a {heroName}</h1>;
    }

}

export default Welcome//in order to import