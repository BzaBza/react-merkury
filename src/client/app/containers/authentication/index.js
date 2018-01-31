import React from 'react';
import Login from "../../components/smart/login/index";
import Register from "../../components/smart/register/index";


class Authentication extends React.Component {

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <Login/>
                    <Register/>
                </div>
            </section>
        )
    }
}

export default Authentication;