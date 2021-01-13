import React, { Component } from 'react';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import EventBind from './component/EventBind'
class App extends Component {
    render(){
        return(//so greet can now be like a custom html tag, it's return html after all..
        <div className = "App">
            
            <Greet name = "Adriel" heroName = "loser">
              <p>This is children props</p> 
              
            </Greet>
            <Welcome name = "Karen" heroName = "callthemanager"/>
            
            <FunctionClick />
            <ClassClick />
            <EventBind />
            {/*
            <Greet name = "Karen" heroName = "callthemanager">
                <button>Action man</button>
            </Greet>
            <Greet name = "Richard" heroName = "dummythiccc"/>

            <Welcome  name = "Adriel" heroName = "loser"/>
            <Welcome name = "Karen" heroName = "callthemanager"/>
            <Welcome name = "Richard" heroName = "dummythiccc"/>
            <Message />
            <Counter addValue = '69'/>*/}
        </div>
        );
    }

}

export default App;