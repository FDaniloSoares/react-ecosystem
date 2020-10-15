import { expect } from 'chai';
import { todos } from '../reducers';

describe('The Todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'Hello', isCompleted: false};
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            },
        };
        const originalState = { isLoadinhg: false, data: [] };
        const expected = {
            isLoadinhg: false,
            data: [fakeTodo],
        };
        const actual = todos(originalState, fakeAction);
        expect(actual).to.deep.equal(expected);
    });
});