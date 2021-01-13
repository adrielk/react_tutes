import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : "Hello",
        }

        this.clickHandler = this.clickHandler.bind(this)//official way to bind event handler
    }

    clickHandler(){
        this.setState({
            message: "Goodbye!"
        })
        console.log(this)//read up on why it's undefined...so we must bind event handlers
    }

    //arrow function binding (last option, still efficient and good)
    // clickHandler = ()=>{
    //     this.setState({
    //         message: 'Goodbye!!'
    //     })

    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
             {/*<button onClick = {this.clickHandler.bind(this)}> oEvent bind click</button>*/}
             {/*this appraoch makes pasing params ezz <button onClick = {() => this.clickHandler()}> oEvent bind click</button>*/}
             <button onClick = {this.clickHandler}> oEvent bind click</button>


            </div>
        )
    }
}

export default EventBind
