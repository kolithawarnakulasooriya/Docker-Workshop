import { fromJS, Map } from 'immutable'

const TODO_LIST = "todoList"

const todoCompleted = (state, payload) => {
  const index = state.get(TODO_LIST).findIndex(item => item.id === payload.id);
  return state.set(TODO_LIST, state.get(TODO_LIST).setIn([index,'completed'],payload.completed));
}

const todoDeleted = (state,payload)=>{
  const index = state.get(TODO_LIST).findIndex(item => item.id === payload.id);
  return state.deleteIn([TODO_LIST, index]);
}

const todoSaved = (state, payload)=>{

  const index = state.get(TODO_LIST).findIndex(item => item.id === payload.id);
  if(index < 0){
    return state.updateIn([TODO_LIST],arr=>arr.push({
      id: payload.id, 
      title: payload.title, 
      description: payload.description,
      completed: payload.completed
    }))
  }else{
    return state.setIn([TODO_LIST, index],{
      id: payload.id, 
      title: payload.title, 
      description: payload.description,
      completed: payload.completed
    })
  }
}

const rootReducer = (state = Map({}), action) => {
    switch (action.type) {
      case "TODO_LIST_LOADED": return state.set(TODO_LIST, fromJS(action.todoList))
      case "IS_LOADING": return state.set('loading',action.payload)
      case "TODO_COMPLETED": return todoCompleted(state,action.payload);
      case "TODO_DELETED": return todoDeleted(state,action.payload);
      case "TODO_SAVED": return todoSaved(state,action.payload);
      case "SEARCH_TODO": return state.set('searchTerm', action.payload)
      default:
        return state
    }
}

export default rootReducer;