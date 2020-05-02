import React, { Component } from 'react';
import {Image,Button} from 'react-bootstrap'
import CarList from './CarList';
class Register extends Component {
   

    render() {
        
        return(
            <div>
            <li>
                <CarList name={this.props.carinfo.name}/>
                {/* {this.props.carinfo.name} */}
            </li>
            </div>
        );

    }
}

export default Register;
