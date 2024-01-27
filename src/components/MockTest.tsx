import { useEffect, useState } from 'react';
import { Todo } from '../mocks/handlers';

export default function MockTest() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/todos')
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    fetch('todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: todo,
    }).then((res) => {
      fetch('/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodo('');
          setTodos(data);
          setLoading(false);
        });
    });
  };

  return (
    <div>
      <h2 className='text-xl'>TODOLIST</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          placeholder='새로운 할일'
          disabled={loading}
          value={todo}
          onChange={({ target: { value } }) => setTodo(value)}
        />
        <button disabled={!todo}>추가</button>
      </form>
    </div>
  );
}
