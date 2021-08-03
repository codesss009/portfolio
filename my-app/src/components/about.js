import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class About extends Component{
    render()
    {
        return(
            <div class=" container about"><div  id="about" class="row"><div class="col-md-7"><p><h1>Hey there,</h1></p>
            <p><h2>This is Sharath</h2></p>
            <p><h4>Iam a cyber-security enthusiast,a constant learner and a web-developer.Iam looking forward to collaborate in cyber-security.</h4></p></div>
            <div class="col-4 "><img class="ssspic" src="https://i.imgur.com/leG6hCN.jpg" width="400" length="400"/></div>
            </div>
            <div>
             <p> <p><h1 class="heading">Alma matter</h1></p>
                    <p><div class="card  fade-in-right ">
                            <div class="card-header bg-primary text-white fw-bolder">
                                <b>Bachelors in Computer Science</b>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">T.K.R college of engineering and technology</h5>
                                    <p class="card-text text-muted">2018-2022</p>
            
                            </div>
                        </div>
                    </p>
                    <p><div class="card  fade-in-right ">
                            <div class="card-header bg-primary text-white fw-bolder">
                                <b>Secondary education</b>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Velociity Jr.College,Hyd</h5>
                                    <p class="card-text text-muted">2016-2018</p>
            
                            </div>
                        </div>
                    </p>
              </p>
            </div>
        </div>

        )
    }
}
export default About;
