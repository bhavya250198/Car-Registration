import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Image,Button} from 'react-bootstrap'
import Register from './Register'
import * as ReactBootstrap  from "react-bootstrap";
import {Nav} from 'react-bootstrap';
class FirstCarPage extends Component {
    constructor(){
        super();
        this.state = {
                bookingStatus: false,
            }
        }
    

    render() {
        return(
           <div>
            
           
           <ReactBootstrap.Card >
           
             <ReactBootstrap.Card.Body>  
                    {this.props.carinfo.name}
            
                <li>
                    {this.props.carinfo.price}
                </li>
                <li>
                <Image src={this.props.carinfo.img} fluid/>
               </li>
               <Nav.Link  href="/seeDetail">     <Button>See Details</Button></Nav.Link>

                  <Nav.Link  href="/form">  <Button disabled={this.state.bookingStatus}  onClick={() => this.updateBookingStatus()}>Book Now</Button></Nav.Link>
                </ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>
            
            </div>
        );

    }

    updateBookingStatus(){
        console.log(this.props.carinfo.name)
    }

}

export default FirstCarPage;
