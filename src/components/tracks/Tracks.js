import React from 'react';
import {Consumer} from '../../context'
import Spinner from '../layouts/Spinner';
import Track from './Track';

class Tracks extends React.Component {
    
    render() { 
        return(
            <Consumer>
            {
                ({heading,track_list}) =>{
                    
                    if(track_list.length > 0){
                        return(
                            <React.Fragment>
                                <h3 className="text-center mb-4">{heading}</h3>
                                <div className="row">
                                    {
                                        track_list.map(track=>(
                                            <Track key={track.track.track_id} track={track}/>
                                        ))
                                    }
                                </div>
                            </React.Fragment>
                        )
                    }else{
                        return(
                            <Spinner/>
                        )
                    }
                }
            }
            </Consumer>
        )
 
    }
}
 
export default Tracks;