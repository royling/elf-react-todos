import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Todos } from './todos/todos';
import './style.css';

function App() {
  return (
    <section>
      <h1 className="text-2xl mb-2">Elf Todos</h1>

      <Todos />
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
