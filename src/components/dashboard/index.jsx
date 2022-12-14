import React from 'react';
import { connect } from "react-redux";
import Header from './header';
import Loading from '../loader';
import CardsGrid from './cardsGrid';
import getTodoList from './selectors/todoSelector'
class Dashboard extends React.Component{

    constructor(props){
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    componentDidMount(){
        this.props.loadTodoList();
    }

    onSearchSubmit(event){
        event.preventDefault();
        this.props.searchTodo(event.target.txtSearch.value);
    }
    
    render(){
        const {loading, todoList} = this.props;
        if(loading){
            return <Loading/>
        }
        return (
            <>
            <Header onSearchSubmit={this.onSearchSubmit} searchTerm={this.props.searchTerm}/>
            <div className='openAppButtonWrapper'>
                <button onClick={this.props.goto} className='openAppButton'>Quit</button>
            </div>
            <CardsGrid 
                todoList={todoList} 
                saveTodo={this.props.saveTodo}
                deleteTodo={this.props.deleteTodo}
                completeTodo= {this.props.completeTodo}
            />
        </>  
        )
    }
}

const mapStateToProps = state => {
    return({
        todoList: getTodoList(state),
        loading: state.get('loading'),
        searchTerm: state.get('searchTerm')
    })
};
  
const mapDispatchToProps = dispatch => ({
    loadTodoList: () => dispatch({type: 'LOAD_TODO_LIST'}),
    saveTodo: (payload) => dispatch({type: 'SAVE_TODO', payload}),
    deleteTodo: (payload) => dispatch({type: 'DELETE_TODO', payload}),
    completeTodo: (payload) => dispatch({type: 'COMPLETE_TODO', payload}),
    searchTodo: (payload) => dispatch({type: 'SEARCH_TODO', payload})
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);