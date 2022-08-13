import styles from './Task.module.css'
import trashIcon from '../assets/trash.svg'

interface TaskProps {
  content: string;
  markAsCompleted: (content: string) => void;
  removeTodo: (content: string) => void;
}

export function Task({ content, markAsCompleted, removeTodo }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" name={content} id={content} onClick={() => markAsCompleted(content)} />
      <label htmlFor={content}></label>
      <p className={styles.taskText}>{content}</p>
      <button type='button' title='Delete todo' onClick={() => removeTodo(content)}>
        <img src={trashIcon} alt='Delete todo' />
      </button>
    </div>
  )
}