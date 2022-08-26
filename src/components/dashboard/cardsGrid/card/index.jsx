import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {  Card, Button, Form, ButtonGroup } from 'react-bootstrap';
import './style.css'
class CardItem extends React.Component{

    constructor(props){
        super(props);

        this.state={
            isNew: props.isNew || false,
            isEditable: false,
            data: {
                id: props.id,
                title: props.title,
                description: props.description,
                completed: props.completed
            }
        }

        this.onCreateNewTodo = this.onCreateNewTodo.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onComplete = this.onComplete.bind(this);
    }

    onCreateNewTodo(event){
        event.preventDefault();
        this.props.saveTodo({
            id: event.target.txtid.value || uuidv4(),
            title: event.target.txtTitle.value,
            description: event.target.txtDescription.value,
            completed: this.state.data.completed || false
        });
    }

    onDeleteTodo(event){
        event.preventDefault();
        this.props.deleteTodo({
            id: this.state.data.id
        });
    }

    onComplete(event){
        event.preventDefault();
        this.props.completeTodo({
            id: this.state.data.id,
            completed: !this.state.data.completed}
            );
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.title && nextProps.description){
            this.setState({
                data: {
                    id: nextProps.id,
                    title: nextProps.title,
                    description: nextProps.description,
                    completed: nextProps.completed
                }
            })
        }
    }

    render(){
        const { isNew, isEditable, data} = this.state;

        if(isNew){
            return(
                <Card  className='add-your-todo-body'>
                    <Card.Body  onClick={()=> this.setState({isNew: false,isEditable: true})} >
                        <Button className='add-your-todo'>Add Your Todo</Button>
                    </Card.Body>
                </Card>
            )
        }
        const {id, title, description, completed} = data;
        if(isEditable){
            return(
                <Form onSubmit={this.onCreateNewTodo}>
                    <Card className="p-3 editable-card">
                        <Card.Body>
                            <Card.Title>
                                <Form.Control id="txtTitle" type="text" defaultValue={title} placeholder="Title" />
                            </Card.Title>
                            <Card.Text>
                                <Form.Control id="txtDescription" type="text" defaultValue={description} placeholder="Description"/>
                            </Card.Text>
                            <Card.Text hidden>
                                <Form.Control id="txtid" type="text" defaultValue={id} placeholder="Description"/>
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="primary" type="submit">Save</Button>
                                <Button variant="outline-primary" onClick={()=> this.setState({isNew: !id ? true : false, isEditable: false})}>Cancel</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Form>)
        }
        return(<Card className="p-3 editable-card">
                    <Card.Body>
                        <Card.Title>
                         {title}
                        </Card.Title>
                        <Card.Text className='description'>
                         {description}
                        </Card.Text>
                        <Card.Footer>
                            <Button variant={completed ? "primary" : "secondary"} onClick={this.onComplete}>{!completed ? "Active" : "Done"}</Button>    
                            <Button variant="success" onClick={()=> this.setState({ isEditable: true})}>Edit</Button>
                            <Button variant="danger" onClick={this.onDeleteTodo}>Delete</Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
        );
    }
}

export default CardItem;