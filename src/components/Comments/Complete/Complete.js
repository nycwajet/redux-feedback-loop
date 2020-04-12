import React, {Component} from 'react';

class Complete extends Component{
    handleClick=()=>{
        this.props.history.push('/');
    }
    render(){
        return(
            <section>
                <h2>Thank You For Your Feedback!!!</h2>
                <button onClick={this.handleClick}>Start Feedback Again</button>
            </section>
        )
    }
}