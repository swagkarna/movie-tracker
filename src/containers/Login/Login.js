import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
// import { connect } from 'react-redux';
import './Login.scss';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            incorrectUserInfo: false,
            validUser: false
        }
    }

    handleChange = (e) => {
        const { value, name} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        const { email, password} = this.state;
        //thunk lesson on Friday
        //how to put user info into database
    }

    render() {
        //if this.state.validUser is true, then 
        // redirect to movie/tracker home page
        return(
            <div className='App'>
            <section className='container'>
            <header>
              <h1>Movie <i className="fas fa-film"></i> Tracker</h1>
            </header>
            <main>
              <form onSubmit={this.handleSubmit}>
                <input type='text' name='email' placeholder='Email' onChange={this.handleChange}></input>
                <input type= 'text' name='password' placeholder='Password' onChange={this.handleChange}></input>
                <input type='submit' value='Login' className='login'></input>
                <h2>Don't Have An Account?</h2>
                <a href='blank'><p>Create An Account</p></a>
              </form>
            </main>
            </section>
          </div>

        )
    }

}

export default Login;

//fetch method for database
//method of post 
//body which  is taking in email and password
//post localhost api user from repo in postman 
//add head of content type
//add in bocy which is object of password and email 
//return that specific user
//under users in the repo (sign in/create account/addfavorite/receiveallfavorites/deleteafavorite)
//to grab do a fetch request then set an error
//set fetch request onclick 