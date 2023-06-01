import * as React from 'react';
import { AddTodo } from './add-todo/add-todo';
import { useObservable } from '@ngneat/use-observable';
import {
  addTodo,
  deleteTodo,
  visibleTodos$,
  updateTodoCompleted,
  updateTodosFilter,
} from './state/todos.repository';
import { TodoItem } from './todo/todo';
import { Filters } from './filters/filters';

export function Todos() {
  const [todos] = useObservable(visibleTodos$);

  return (
    <div>
      <Filters onChange={updateTodosFilter} />

      <AddTodo onAdd={addTodo} />

      <section className="mt-3">
        {todos.map((todo) => (
          <TodoItem
            {...todo}
            key={todo.id}
            onClick={updateTodoCompleted}
            onDelete={deleteTodo}
          />
        ))}
      </section>
    </div>
  );
}
