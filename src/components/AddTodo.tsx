import { FormEvent } from "react"
import plusIcon from '../assets/plus.svg'
import styles from './AddTodo.module.css'

interface AddTodoFormProps {
  onSubmit: (e: FormEvent) => void;
  onChange: (value: string) => void;
  value: string;
}

export function AddTodoForm({ onSubmit, onChange, value }: AddTodoFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.addTodo}>
      <input 
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <button type="submit" disabled={value.length === 0}>
        <b>Criar</b>
        <img src={plusIcon} />
      </button>
    </form>
  )
}