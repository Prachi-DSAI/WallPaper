import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
    export function Login(){
        return(
    <div className="whole">  
       <div id="login">      
        <div className="container1">  
            <div id="login-row" className="row justify-content-center align-items-center">   
                <div id="login-column" className="col-md-6">  
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="" method="post">
                            <h3 className="text-center text-color">Login</h3>
                            <div className="form-group">
                                <label for="username" className="text-color">Email-Id:</label><br/>
                                <input type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="password" className="text-color">Password:</label><br/>
                                <input type="text" name="password" id="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label for="remember-me" className="text-info"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox"/></span></label><br/>
                                <input type="submit" name="submit" className="btn submit-btn btn-md " value="submit"/>
                            </div>
                            <Link to="/SignUp">
                            <div id="register-link" className="text-right">
                                <a href="#" className="text-info">Register here</a>
                            </div>
                            </Link>
                        </form>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>
       </div>   
      
    );
}