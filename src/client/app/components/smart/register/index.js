import React from 'react';
import AuthenticationHeader from "../../dumb/header/index";
import Title from "../../dumb/title/index";
import Input from "../../dumb/input/index";
import MainButton from "../../dumb/main-button/index";


class Register extends React.Component {

    render() {
        return (
            <section className="authentication-background d-flex justify-content-center align-items-center">
                <div className="authentication-wrap col-md-6">
                    <div className="d-flex justify-content-center flex-wrap">
                        <AuthenticationHeader/>
                        <Title title1='Registration ' title2='!'/>
                        <form action="#">
                            <Input/>
                            <Input/>
                            <MainButton type='submit' value='Enter >'/>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Register;