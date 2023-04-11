import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from './components/addTodo/AddTodo';
import TodoList from './components/todo/TodoList';

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo />
        <TodoList />
      </div>
    </div>
  );
}
