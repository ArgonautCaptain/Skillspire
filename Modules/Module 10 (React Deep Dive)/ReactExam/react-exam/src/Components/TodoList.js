import react, { useState } from 'react';
import styles from './TodoList.module.css';

const TodoList = () => {
  const defaultTodos = [
    { id: 1, text: 'Phase 1: Learn React' },
    { id: 2, text: 'Phase 2: ???' },
    { id: 3, text: 'Phase 3: Profit 💰' },
  ];

  const [todos, setTodos] = useState(defaultTodos);

  const clearTodos = () => setTodos([]);
  const resetTodos = () => setTodos(defaultTodos);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Todo List</h2>
      {todos.length > 0 ? (
        <ul className={styles.todoList}>
          {todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              {todo.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.message}>
          No Current Tasks!
        </p>
      )}
      <div style={{ marginTop: '1rem' }}>
        {todos.length > 0 ? (
          <button className={styles.button} onClick={clearTodos}>Empty Todo List</button>
        ) : (
          <button className={styles.button} onClick={resetTodos}>Populate Todo List</button>
        )}
      </div>
    </div>
  );
};

export default TodoList;