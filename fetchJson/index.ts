import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data;
  console.log('todo: ', todo);
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
	The todo with ID: ${ID}
	Had a title of: ${title}
	It is ${finished}
	`);
});
