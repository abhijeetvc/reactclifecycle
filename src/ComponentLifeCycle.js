import React from 'react'
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

class ComponentLifeCycle extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log("Component Did mount... "+this.state.number);      
    }
    componentDidUpdate(){
        console.log("Component Did Update... " + this.state.number);       
    }
    incrementNumber=()=>{
        this.setState({number:this.state.number+1})
    }
    decrementNumber=()=>{
        this.setState({number:this.state.number-1})
    }

    toggleComponent=()=>{
        this.setState({number:this.state.number===0 ? 1:0})
    }

    render(){

        let component=this.state.number? <ComponentOne/>:<ComponentTwo/>

        return(
            <div>
                <h1>Main Component</h1>
                <p>Component Life Cycle methods</p>
                <p>Number is: {this.state.number}</p>
                {component}
                <button type="button" onClick={this.incrementNumber}>Add</button>
                <button type="button" onClick={this.decrementNumber}>Decrement</button>
                <button type="button" onClick={this.toggleComponent}>Switch Component</button>
            </div>
        )
    }
}

export default ComponentLifeCycle
