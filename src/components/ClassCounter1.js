import React, { Component } from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //  count:0,
            //  name:""
            x:0,
            y:0
        }
        
    }
    logMousePosition = e =>{
        this.setState({
                x:e.clientX,
                y:e.clientY
        })
    }
    componentDidMount(){
        // document.title = `Clicked ${this.state.count} times`;
        window.addEventListener('mousemove',this.logMousePosition);
    }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevState.count !== this.state.count){
    //         console.log("Updating the document title");
    //         this.state.count===1?document.title = `Clicked ${this.state.count} time`:document.title=`Clicked ${this.state.count} times`;
    //     }
    // }
    
    render() {
        return (
            <div>
                {/* <button onClick ={()=>{this.setState({count:this.state.count+1})}}>click {this.state.count} times </button>
                <input 
                    type="text" 
                    value={this.state.name} 
                    onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}
                /> */}
                X-{this.state.x}Y-{this.state.y}
            </div>
        )
    }
}

export default ClassCounter1
