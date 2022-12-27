import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  console.log('todo: ', todo);
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
	The todo with ID: ${ID}
	Had a title of: ${title}
	${completed ? 'It is completed' : 'It is not completed'}
	`);
});
