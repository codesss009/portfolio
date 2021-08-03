import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class Header extends Component
{
    render(){
        return(
            <div class="jumbotron jumbotron-fluid" >
  <div class="container" >
   <span class="typewriter"><h1 class="slide-in-right fw-bold display-4">HI,This is SSS</h1></span>
    <p class="lead "></p>
  </div>
</div>
        );
    }
}
export default Header;