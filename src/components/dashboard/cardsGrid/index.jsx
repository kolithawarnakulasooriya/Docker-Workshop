import React from 'react';
import CardItem from './card';
import { CardColumns } from 'react-bootstrap';

const CardsGrid = ({ todoList, saveTodo, deleteTodo, completeTodo }) => (
    <CardColumns style={{
        marginTop: '30px',
        columnCount: 3
    }}>
        {todoList.map(todo=> {
        const {title, description, id, completed} = todo;
        return (
            <CardItem title={title} 
                description={description} 
                id={id} 
                saveTodo={saveTodo} 
                deleteTodo={deleteTodo}
                completed={completed}
                completeTodo={completeTodo}/>
        )
     })}
        <CardItem isNew saveTodo={saveTodo}/>
    </CardColumns>
)


export default CardsGrid;