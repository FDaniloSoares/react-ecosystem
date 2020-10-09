import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import TodoListItem from './TodoListItem';
import { loadTodos } from './thunks'
import { removeTodo, markTodoAsCompleted } from './actions'
import './TodoList.css'

const TodoList = ({ todos = [], isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading...</div>
    const content = (
        <div className="list-wrapper">
            <NewToDoForm />
            {todos.map((todo, index) => <TodoListItem 
                todo={todo} 
                key={index} 
                onRemovePressed={onRemovePressed}
                onCompletedPressed={onCompletedPressed} />)}  
        </div>
    );
    return isLoading ? loadingMessage : content            
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);