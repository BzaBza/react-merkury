import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';

class Card extends Component {
    render() {
        const {
            card, isDragging, connectDragSource, connectDropTarget,
        } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(connectDropTarget(<div className="d-flex justify-content-between align-items-center"
            style={{
                border: '1px solid rgba(132, 146, 175, 0.3)',
                cursor: 'move',
                opacity,
                padding: '0 0.5em 0 0.5em',
                margin: '1em 0 0 0',
                width: '460px',
                height: '118px',
            }}>
            <div className="tasks-side-image"><p>{card.text.charAt(0)}</p></div>
            <div className="d-flex flex-wrap align-items-center col-9">
                <p className="col-12">{card.text}</p>
                <p className="col-12">{card.days}</p>
            </div>
            <button type="button" className="tasks-button"><FaEllipsisV className="tasks-button-icon"/>
            </button>
        </div>));
    }
}

const cardSource = {

    beginDrag(props) {
        return {
            index: props.index,
            listId: props.listId,
            card: props.card,
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult && dropResult.listId !== item.listId) {
            props.removeCard(item.index);
        }
    },
};

const cardTarget = {

    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;
        const sourceListId = monitor.getItem().listId;

        if (dragIndex === hoverIndex) {
            return;
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }

        if (props.listId === sourceListId) {
            props.moveCard(dragIndex, hoverIndex);
            monitor.getItem().index = hoverIndex;
        }
    },
};

export default flow(
    DropTarget('CARD', cardTarget, connect => ({
        connectDropTarget: connect.dropTarget(),
    })),
    DragSource('CARD', cardSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    })),
)(Card);
