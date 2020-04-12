import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component{

    state = {
        feeling: 0,
    }
      
    handleChange=(event)=>{
        console.log('In handleChange', this.state);
        this.setState({
            ...this.state, feeling: event.target.value,
        })
    }


    
    render(){
        return(
            <section>
                <h2>How Are You Feeling Today?</h2>
                <p>In A Scale From 1 - 5</p>
                <input type="number" name="feeling" min="1" max="5" onChange={this.handleChange} />
                <button type="submit">Next</button>
            </section>
        )
    }
}

export default connect() (Feeling);