import axios from 'axios';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = 'http://jsonplaceholder.typicode.com/todos/1';
axios.get(url).then((res) => {
    const todo = res.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        Todo ID: ${id}
        Title: ${title}
        Completed: ${completed}
        `);
};
