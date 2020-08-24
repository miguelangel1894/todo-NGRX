import { createReducer, on } from '@ngrx/store';
import {crear} from './todo.actions';
import { Todo } from "./models/todo.model";
 
export const estadoInicial: Todo[] = [
  new Todo('salvar el mundo')
];
 
const _todoReducer = createReducer(
  estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}