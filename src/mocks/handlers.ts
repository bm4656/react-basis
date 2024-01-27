import { http, HttpResponse, StrictRequest } from 'msw';

export type Todo = {
  id: number;
  text: string;
};
const todos: Todo[] = [
  { id: 1, text: '할일1' },
  { id: 2, text: '할일2' },
  { id: 3, text: '할일2' },
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
    const requestData = request as unknown as string;
    const newTodo: Todo = { id: 4, text: requestData };
    todos.push(newTodo);
    return HttpResponse.json(todos, { status: 201 });
  }),
];
