//creating a class component:
//class vs functional: "stateful", can contain complex logic, lifecycle hooks, "this" keyword
import React, { Component } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

//demonstrating props for class components: this.props
//note that, props are immutable. we cannot change them
class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : 'Welcome Visitor!',
            button_msg : 'Subscribe here'     
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing, loser",
            button_msg: "Unsubscribe loser"
        })

    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>{this.state.button_msg}</button>
            </div>
            
        );
    }

}

export default Message//in order to import