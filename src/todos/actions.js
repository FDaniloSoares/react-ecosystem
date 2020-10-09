import { LoaderOptionsPlugin } from "webpack";

export const CREATE_TODO = 'CREATE_TODO';
export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text },
});

export const MARK_TODO_AS_COMPLETED = 'MARK_TODO_AS_COMPLETED';
export const markTodoAsCompleted = text => ({
    type: MARK_TODO_AS_COMPLETED,
    payload: { text },
});

export const LOAD_TODOS_IN_PROGURESS = 'LOAD_TODOS_IN_PROGURESS';
export const loadTodosInProgess = () => ({
    type: LOAD_TODOS_IN_PROGURESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = () => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});