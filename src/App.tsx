
import { FormEvent, useState } from 'react';
import { Header } from './components/Header';
import { AddTodoForm } from './components/AddTodo';
import styles from './App.module.css'
import './global.css'
import { TaskList } from './components/TaskList';

interface Task {
  isCompleted: boolean;
  content: string;
}

function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos(state => [...state, { isCompleted:false, content: todoText }])
    setTodoText('');
  }

  const markAsCompleted = (content: string) => {
    const todosWithCompletedOnes = todos.map(todo => {
      if (todo.content === content && todo.isCompleted) {
        return {...todo, isCompleted: false}
      } else if (todo.content === content) {
        return {...todo, isCompleted: true}
      } else {
        return todo
      }
    })
    setTodos(todosWithCompletedOnes);
  }

  const removeTodo = (content: string) => {
    const updatedTodos = todos.filter(todo => todo.content !== content);
    setTodos(updatedTodos);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddTodoForm 
          onSubmit={handleSubmit}
          onChange={setTodoText}
          value={todoText}
        />
        <TaskList tasks={todos} markAsCompleted={markAsCompleted} removeTodo={removeTodo}/>
      </div>
    </>
  )
}

export default App
