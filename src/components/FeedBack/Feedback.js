import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';

class Feedback extends Component{
    render(){
        return(
           <section>
               <h2>This Is Your Feedback</h2>
               <p>Feeling: {this.props.reduxState.FeedbackReducer.feeling} </p>
           </section>
        )
    }
}

export default connect()(withRouter(Feedback));