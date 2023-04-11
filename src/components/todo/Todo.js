import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function Todo({ todo, index }) {
  const dispatch = useDispatch();
  const markTodo = (index) => {
    dispatch({
      type: 'MARK_TODO',
      payload: index,
    });
  };

  const removeTodo = (index) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: index,
    });
  };

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
      </div>
    </div>
  );
}
