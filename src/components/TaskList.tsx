import { Task } from './Task';
import styles from './TaskList.module.css'

import clipboardIcon from '../assets/clipboard.svg'

interface Task {
  isCompleted: boolean;
  content: string;
}

interface TaskListProps {
  tasks: Task[];
  markAsCompleted: (content: string) => void;
  removeTodo: (content: string) => void;
}

export function TaskList({ tasks, ...props }: TaskListProps) {
  const createdTasks = tasks.length;
  const completedTasks = tasks.reduce((acc, cur) => cur.isCompleted ? acc + 1 : acc, 0);
  return (
    <div className={styles.taskList}>
      <div className={styles.taskListHeader}>
        <p>Tarefas criadas <span className={styles.taskCount}>{createdTasks}</span></p>
        <p className={styles.finishedTasks}>Concluídas <span className={styles.taskCount}>{`${completedTasks} de  ${createdTasks}`}</span></p>
      </div>
      {tasks.length > 0 ? (
        <div className={styles.tasks}>
          {tasks.map(task => <Task key={task.content} content={task.content} {...props} />)}
        </div>
      ) : (
        <div className={styles.emptyList}>
          <img src={clipboardIcon} alt='' />
          <b>Você ainda não tem tarefas cadastradas</b>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </div>
  )
}