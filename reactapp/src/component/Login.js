import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/dist/js/bootstrap'
import {Link} from 'react-router-dom';
class Login extends React.Component 
{
    state={
        name:'',
        password:'',
        val:''

    }
    login = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };
    
      handle = (event) => {
        event.preventDefault();
        
        const { name, password } = this.state;
        // if (!name || !password) {
        //   alert("Please fill out all fields");
        //   return;
        // }
        const val = "Username: " + name + " Password: " + password;
        this.setState({ val }, () => {
          alert(this.state.val);
        });
      };
    render()
    {
        return(
            <>
            <div style={{marginLeft:250,marginTop:100}}>
           <form onSubmit={this.handle} style={{backgroundColor:"lightblue",width:500,height:340,textAlign:"center"}}>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 style={{textAlign:"center",marginTop:20,marginBottom:40}}>Login Form</h3>
                            </div>
                            <div className="col-lg-12">
                              Enter Name:  <input type="text" className="demo" name="name" value={this.state.name} onChange={this.login} required = "required"  />
                            </div>
                            <div className="col-lg-12">
                              Enter Password :  <input type="password" className="demo1" name="password" value={this.state.password} onChange={this.login}  required = "required"  />
                            </div>
                            <div className="col-lg-12" >
                                <input type="submit" style={{backgroundColor:"lavenderblush",marginBottom:10}} />
                            </div>
                            <div>
                           <p>Don't have an account ?</p>  <Link href="#" to="/Registration" >Registration</Link>
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
export default Login;