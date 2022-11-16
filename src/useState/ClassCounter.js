import React, { Component } from 'react';
class ClassCounter extends Component {
    state = { 
        count: 0
     } 

     handleCount = () => {

        this.setState({
            count : this.state.count + 1
        })

        console.log('Count Increased')
     }

    render() { 
        return (
            <button onClick={this.handleCount}>
                Count : {this.state.count}
            </button>
        );
    }
}
 
export default ClassCounter;