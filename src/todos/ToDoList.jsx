import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos
} from './selectors'

import { 
    loadTodos, 
    removeTodoRequest,
    markTodoAsCompletedRequest,
} from './thunks'

import './TodoList.css'

const TodoList = ({ completedTodos, incompleteTodos, isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading...</div>
    const content = (
        <div className="list-wrapper">
            <NewToDoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map((todo, id) => <TodoListItem 
                todo={todo} 
                key={id} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}  
            <h3>Completed:</h3>
            {completedTodos.map((todo, id) => <TodoListItem 
                todo={todo} 
                key={id} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}
        </div>
    );
    return isLoading ? loadingMessage : content            
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);