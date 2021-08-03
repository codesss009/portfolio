import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Component } from 'react';



 class Navibar extends Component
 {
     render(){
         return(
           <div><nav className="navbar navbar-dark navbar-expand-lg fixed-top navbar-bold bg-primary">
           <a className="navbar-brand menu example5" href="#">Portfolio</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNav">
             <ul className="navbar-nav offset-lg-9">
               <li className="nav-item active">
                 <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#about">About</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#skills">Skills</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#contact">Contact</a>
               </li>
             </ul>
           </div>
         </nav>
       
           </div>

         
              
             );
          
         
        
         
     }
 }
 export default Navibar; 