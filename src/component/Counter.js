import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count : 0,
        }
    }

    increment(){//note: never modify the state directly! use setState!
        // this.setState({
        //     count : this.state.count+1
        //     }, ()=>{console.log('Callback value', this.state.count)
        //         //place whatever code that is to happen within callback function, as a second param
        //         console.log("Why yes. this is the correct, synchronous way")
        //     }
        // )
        
        this.setState((prevState, props) => ({//this prevState ensures react works sychronously to be used in incrementFive() (it's just passing a function as an argument to the setState method)
            count: prevState.count+1 + parseInt(this.props.addValue)

        }))


    }

    incrementFive(){
        for(var i = 0 ;i<5;i++){
            this.increment()
        }

    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick = {() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
