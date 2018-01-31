import React from 'react';


class MainButton extends React.Component {

    render() {

        return (
            <div className="main-button  d-flex justify-content-center">
                <button  type = {this.props.type} className="button btn btn-primary ">{this.props.value}</button>
            </div>
        )
    }
}

export default MainButton;