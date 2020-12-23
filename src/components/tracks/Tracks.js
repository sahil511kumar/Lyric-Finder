import React from 'react';
import {Consumer} from '../../context'
class Tracks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return(
            <Consumer>
            {
                value =>{
                    console.log(value)
                    return <h1>tracks</h1>
                }
            }
            </Consumer>
        )
 
    }
}
 
export default Tracks;