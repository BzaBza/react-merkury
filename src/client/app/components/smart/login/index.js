import React from 'react';
import AuthenticationHeader from "../../dump/header/index";
import Title from "../../dump/title/index";
import Input from "../../dump/input/index";
import MainButton from "../../dump/main-button/index";


class Login extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-center flex-wrap">
                <AuthenticationHeader/>
                <Title  title1 = 'Welcome ' title2 = 'back!'/>
                <form action="#">
                    <Input/>
                    <Input/>
                    <MainButton type = 'submit' value = 'Enter >'/>
                </form>
            </div>
        )
    }
}

export default Login;