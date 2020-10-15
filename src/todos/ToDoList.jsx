import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewToDoForm from './NewToDoForm';
import {
    getCompletedTodos,
    getIncompleteTodos,
    getTodosLoading
} from './selectors';
import {
    loadTodos,
    markTodoAsCompletedRequest,
    removeTodoRequest
} from './thunks';
import TodoListItem from './TodoListItem';


const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompleteTodos, isLoading, onRemovePressed, onCompletedPressed, startLoadingTodos}) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading...</div>
    const content = (
        <ListWrapper>
            <NewToDoForm />
            {incompleteTodos ? <h3>Incomplete:</h3> : null} 
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
        </ListWrapper>
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