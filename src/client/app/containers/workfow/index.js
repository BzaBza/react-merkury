import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../../components/smart/dnd-container';
import FaAngleRight from 'react-icons/lib/fa/angle-right';


class Workflow extends Component {

    render() {
        const style = {
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px"
        };

        const listOne = [
            {id: 1, text: 'New website for Symu.co', days: '5 days delays'},
            {id: 2, text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 3, text: 'New logo for JCD.pl', days: '5 days left'},
            {id: 4, text: 'New logo for JCD.pl', days: '10 days left'}
        ];

        const listTwo = [
            {id: 5, text: 'New website for Symu.co', days: '5 days delays'},
            {id: 6, text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 7, text: 'New logo for JCD.pl', days: '5 days left'},
        ];

        const listThree = [
            {id: 9, text: 'New website for Symu.co', days: '5 days delays'},
            {id: 10, text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 11, text: 'New logo for JCD.pl', days: '5 days left'},
            {id: 12, text: 'New logo for JCD.pl', days: '10 days left'},
            {id: 13, text: 'New logo for JCD.pl', days: '11 days left'}
        ];

        return (
            <div style={style} className="workflow-container d-flex flex-wrap">
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>To Do <span className="gray">({listOne.length})</span></h3>
                        <FaAngleRight className="gray" size={32}/>
                    </div>
                    <Container id={1} list={listOne}/>
                </div>
                <div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>In Progress <span className="gray">({listTwo.length})</span></h3>
                        <FaAngleRight className="gray" size={32}/>
                    </div>
                    <Container id={2} list={listTwo}/>
                </div>
                <div>
                    <div className="d-flex justify-content-between  align-items-center">
                        <h3>Completed <span className="gray">({listThree.length})</span></h3>
                    </div>
                    <Container id={3} list={listThree}/>
                </div>
            </div>
        );
    }
}


export default DragDropContext(HTML5Backend)(Workflow);