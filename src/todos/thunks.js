import { loadTodosInProgess, loadTodosSuccess, loadTodosFailure } from './actions'
import axios from 'axios';

export function loadTodos() {
    return (
        async (dispatch, getState) => {
            
            dispatch(loadTodosInProgess);
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
        )
    }

export const displayAlert = text => () => {
    alert(text);
};