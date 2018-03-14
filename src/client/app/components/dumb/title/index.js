import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
    render() {
        return (
            <div className="title text-center">
                <h2><span className="gray">{this.props.title1}</span>{this.props.title}<span
                    className="blue">{this.props.title2}</span></h2>
            </div>
        );
    }
}
Title.propTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
};
Title.defaultProps  = {
    title1: '',
    title2: '',
};
export default Title;
