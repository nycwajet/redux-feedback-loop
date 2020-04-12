import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Feedback extends Component{
    render(){
        return(
           <section>
               <h2>This Is Your Feedback</h2>
               <p>Feeling: {this.props.reduxState.FeedbackReducer.feeling} </p>
           </section>
        );
    }
}
const reduxStateProps = (reduxState)=>({
    reduxState,
});

export default connect(reduxStateProps)(withRouter(Feedback));