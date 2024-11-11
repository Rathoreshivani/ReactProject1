import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap'
import {Link} from 'react-router-dom';
class Registration extends React.Component 
{
    state={
        name:'',
        email:'',
        password:'',
        resetpassword:'',
         val:''
    }
    login=(event)=>{
      const {name,value}=event.target;
      this.setState({[name]:value});

    };
    handle = (event)=>{
        event.preventDefault();
        const{ name,email,password,resetpassword}=this.state;
        const val = "Username: " + name + "email: " + email + " Password: " + password + "resetpassword:" + resetpassword ;
        this.setState({ val }, () => {
            alert(this.state.val);
          });
        };
    
    render()
    {
        return(
            <>
            <div className="" style={{marginLeft:250,marginTop:100}}>
           <form onSubmit={this.handle} style={{backgroundColor:"lightblue",width:500,height:400,textAlign:"center"}}>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 style={{textAlign:"center",marginTop:20,marginBottom:40}}>Registration</h3>
                            </div>
                            <div className="col-lg-12">
                              Enter Name:  <input type="text" className="demo" name="name" value={this.state.name} onChange={this.login} required = "required" style={{marginLeft:29}} />
                            </div>
                            <div className="col-lg-12">
                              Enter Email:  <input type="email" className="demo" name="email" value={this.state.email} onChange={this.login} required = "required" style={{marginLeft:33}} />
                            </div>
                            <div className="col-lg-12">
                              Enter Password :  <input type="password" className="demo1" name="password" value={this.state.password} onChange={this.login} required = "required"  />
                            </div>
                            <div className="col-lg-12">
                              Reset-Password :  <input type="password" className="demo1" name="resetpassword" value={this.state.resetpassword} onChange={this.login} required = "required"  />
                            </div>
                            <div className="col-lg-12" >
                              <input type="submit" style={{backgroundColor:"lavenderblush",marginBottom:10}} />
                               
                            </div>
                            <div>
                         <p>Don't have an account ?</p><Link  href="#" to="/Login">Login</Link>
                            </div>
                    </div>
                </div>
            </div>
           </form>
           </div>
            </>
        );
    }
}
export default Registration;
