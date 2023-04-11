import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Todo from './Todo';

export default function TodoList() {
  const { todos } = useSelector((state) => state);
  return (
    <div>
      {todos.map((todo, index) => (
        <Card>
          <Card.Body>
            <Todo key={index} index={index} todo={todo} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
