import React, {Component} from 'react';
import {connect} from 'react-redux';

class Feeling extends Component{
    render(){
        return(
            <section>
                <h2>How Are You Feeling Today?</h2>
                <p>In A Scale From 1 - 5</p>
            </section>
        )
    }
}

export default connect() (Feeling);