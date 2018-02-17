import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from '../../components/smart/container';



class Workflow extends Component {

    render() {
        const style = {
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px"
        };

        const listOne = [
            {id: 1, text: 'New website for Symu.co', days: '5 days delays'},
            {id: 2,text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 3,text: 'New logo for JCD.pl', days: '5 days left'},
            {id: 4,text: 'New logo for JCD.pl', days: '10 days left'}
        ];

        const listTwo = [
            {id: 5,text: 'New website for Symu.co', days: '5 days delays'},
            {id: 6,text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 7,text: 'New logo for JCD.pl', days: '5 days left'},
            {id: 8,text: 'New logo for JCD.pl', days: '10 days left'}
        ];

        const listThree = [
            {id: 9,text: 'New website for Symu.co', days: '5 days delays'},
            {id: 10,text: 'Free business PSD Template ', days: '2 days delays'},
            {id: 11,text: 'New logo for JCD.pl', days: '5 days left'},
            {id: 12,text: 'New logo for JCD.pl', days: '10 days left'}
        ];

        return (
            <div style={style} className="containers">
                <Container id={1} list={listOne} />
                <Container id={2} list={listTwo} />
                <Container id={3} list={listThree} />
            </div>
        );
    }
}


export default DragDropContext(HTML5Backend)(Workflow);