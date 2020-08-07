import React, {Component} from 'react';

class LoginComponent extends Component {
    
    doLogin = async () => {
        console.log("Logged IN", this.refs.email.value, this.refs.password.value);
        window.localStorage.setItem('login', true);

        // const fetchPromise= fetch('localhost://api/login').then( (res) => res.json() )
        // .then(res => {
        //     console.log("Successfully made a fetch call");
        // })
        // const loginRes = await fetchPromise;
        // if (loginRes) {
        //     console.log("Login res");
        // }
    }
    render () {
        return (
            <form onSubmit={() => this.doLogin()}>
                <h4>Welcome to Login Page</h4>
                <input type="email" placeholder="email" ref="email" className="input-row" required> 
                </input>
                <input type="password"  placeholder="password"  ref="password" className="input-row" required>
                </input>
                <button type="submit" className="submit-btn">SUBMIT</button>
            </form> 
        );
    }
}

export default LoginComponent;

