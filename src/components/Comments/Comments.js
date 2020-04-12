import React, {Component} from 'react';
import {connect} from 'react-redux';
import Feedback from '../FeedBack/Feedback';

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, event.target.value );
        
        this.setState({
            ...this.state,
            comments: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );
        const action = { type: 'ADD_COMMENTS', payload: this.state.comments };
        this.props.dispatch( action );
        this.props.history.push( '/review' );
    }

    render() {
        return(
            <div>
                <h2>Please Leave Us A Comment</h2>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                            onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>

                <br/>
                <Feedback />
            </div>
        );
    }
}

export default connect()(Comments);