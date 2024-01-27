import { http, HttpResponse } from 'msw';

export type Todo = {
  id: number;
  name?: string;
};
const todos: Todo[] = [
  { id: 1, name: '할일1' },
  { id: 2, name: '할일2' },
  { id: 3, name: '할일2' },
];

export const handlers = [
  // 할일 목록
  http.get('/todos', () => {
    return HttpResponse.json(todos, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),

  // 할일 추가
  http.post('/todos', async ({ request }) => {
    const requestData = await request.json();
    const name = requestData?.toString();
    const newTodo = { id: todos.length + 1, name };
    todos.push(newTodo);
    return HttpResponse.json(todos, { status: 201 });
  }),
];
