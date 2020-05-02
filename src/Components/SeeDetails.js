import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap'
import CarList from './CarList';
class SeeDetails extends Component {
   

    render() {
        
        return(
            <div>
            <li>
                
                 {this.props.carinfo.name} 
            </li>
            </div>
        );

    }
}

export default SeeDetails;
