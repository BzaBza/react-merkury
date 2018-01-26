import React from 'react';
import Logo from "../logo/index";

class Title extends React.Component {


    render() {
        return (
            <div className="title text-center">
                <h2><span className="gray">{this.props.title1}</span>{this.props.title}<span
                    className="blue">{this.props.title2}</span></h2>
            </div>
        )
    }
}

export default Title;