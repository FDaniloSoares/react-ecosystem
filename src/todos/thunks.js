import {
    markTodoAsCompleted,
    removeTodo,
    createTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    loadTodosFailure
} from './actions'

import axios from 'axios';

export const loadTodos = () => async dispatch => {
    dispatch(loadTodosInProgress());   
    await axios.get('http://localhost:8080/todos')
    .then(resp => {
        const todos = resp.data;
        dispatch(loadTodosSuccess(todos));
    })
    .catch(err => {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(err))
    });    
}

export const addTodoRequest = text => async dispatch => {
    
    await axios.post('http://localhost:8080/todos', {
        text: text,
    })
    .then(resp => {
        const todo = resp.data;
        dispatch(createTodo(todo));
    })
    .catch(err => {
        dispatch(displayAlert(err))
    });
}

export const removeTodoRequest = id => async dispatch => {
    await axios.delete(`http://localhost:8080/todos/${id}`)
    .then(resp => {
        const removedTodo = resp.data;
        dispatch(removeTodo(removedTodo));
    })
    .catch(err => {
        dispatch(displayAlert(err))
    });
}

export const markTodoAsCompletedRequest = id => async dispatch => {
    await axios.post(`http://localhost:8080/todos/${id}/completed`)
    .then(resp => {
        const updatedTodo = resp.data;
        dispatch(markTodoAsCompleted(updatedTodo));
    })
    .catch(err => {
        dispatch(displayAlert(err))
    });
}

export const displayAlert = text => () => {
    alert(text);
};