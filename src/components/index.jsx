import React from 'react';
import "./style.css"

class InitPage extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <>
            <div>
                <h1>Docker Workshop</h1>
                <h5>School Of Computing</h5>
                <h5>University Of South Alabama</h5>
                <h7>Harith Warnakulasooriya</h7>
                <div className='logoWrapper'>
                    <img className="dockerLogo" src='imgs/Moby-logo.webp'/>
                </div>
                <div className='openAppButtonWrapper'>
                    <button onClick={this.props.goto} className='openAppButton'>Open Your Todo App</button>
                </div>
            </div>
        </>  
        )
    }
}

export default InitPage;