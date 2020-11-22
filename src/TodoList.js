import { createStore } from 'redux';
import * as Redux from 'redux';

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const FILTER_SET = 'FILTER_SET';

function todoReducer(state = [], action) {
  switch(action.type) {
    case TODO_ADD : {
      return applyAddTodo(state, action);
    }
    case TODO_TOGGLE : {
      return applyToggleTodo(state, action);
    }
    default : return state;
  }
}

function applyAddTodo(state, action) {
  const todo = Object.assign({}, action.todo, { completed: false });
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id === action.todo.id
      ? Object.assign({}, todo, { completed: !todo.completed })
      : todo
  );
}

function filterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case FILTER_SET : {
      return applySetFilter(state, action);
    }
    default : return state;
  }
}

function applySetFilter(state, action) {
  return action.filter;
}

function doAddTodo(id, name) {
  return {
    type: TODO_ADD,
    todo: { id, name },
  };
}

function doToggleTodo(id) {
  return {
    type: TODO_TOGGLE,
    todo: { id },
  };
}

function doSetFilter(filter) {
  return {
    type: FILTER_SET,
    filter,
  };
}

const rootReducer = Redux.combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
});
const store = Redux.createStore(rootReducer);

console.log('initial state:');
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('store update, current state:');
  console.log(store.getState());
});

store.dispatch(doAddTodo('0', 'learn redux'));
store.dispatch(doAddTodo('1', 'learn mobx'));
store.dispatch(doToggleTodo('0'));
store.dispatch(doSetFilter('COMPLETED'));

unsubscribe();

export const TodoListPresentation = () => {
    console.log(store.getState());
    return(
        <div>
            { store.getState().todoState.map( (todo) => {return(<ol>
                <div key={todo. id+2}>
                <li key={todo.id}>{todo.id} {todo.name}</li>
                <button key={todo.id+1} onClick = {doToggleTodo}>TOGGLE TASK</button>
                </div>
                </ol>)})
            }
        </div>
    );
}