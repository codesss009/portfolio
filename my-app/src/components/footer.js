import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom';
import { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap-social/bootstrap-social.css'

class Footer extends Component
{
    render()
    {
        return(
        
           
      <div class="footer">
        <div class="container " id="contact">
        
            <div class="col-12 text-center text-light align-self-md-center justify-content-md-center "><h1>Let's connect...</h1></div>
        
         <div class="row">             
            <div class="col-4 offset-1 col-sm-2">
                <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><a href="home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
           
            <div class="col-12 align-self-center">
                <div class="text-center">
                    <a class="btn btn-social-icon    btn-google" href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                   <span class="ico"> <a class="btn btn-social-icon   btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a></span>
                    <span class="ico"><a class="btn btn-social-icon  btn-linkedin" href="https://www.linkedin.com/in/sharath-ss-42b1b91b1"><i class="fa fa-linkedin"></i></a></span>
                    <span class="ico"><a class="btn btn-social-icon  btn-twitter" href="https://twitter.com/SSSharath009"><i class="fa fa-twitter"></i></a></span>
                   <span class="ico"> <a class="btn btn-social-icon btn-github" href="http://github.com/codesss009"><i class="fa fa-github"></i></a></span>
                    <span class="ico"><a class="btn btn-social-icon " href="mailto:saisharath009@gmail.com"><i class="fa fa-envelope-o"></i></a></span>
                </div>


                </div>
            </div>
       </div>
       <div class="row justify-content-center">             
            <div class="col-auto">
                <p>Thank you for visiting my page</p>
            </div>
       </div>
        </div>
        )  
       }

}
export default Footer;