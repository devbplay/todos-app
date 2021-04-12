import styles from '../styles/components/SectionTodo.module.scss'
import Todo from './Todo'

import categorias from '../../categorias.json'

interface TodoProps {
    title: string;
    qtd: number;
    index: number;
}

export default function SectionTodo(props: TodoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.areaTitleTodo}>
                <div className={styles.titleTodo}>{ props.title }</div>
                <div className={styles.qtdTodos}>
                    <span>{ props.qtd }</span>
                </div>
            </div>

            <div className={styles.addTodoContainer}>
                <button className={styles.addTodo}>
                    <img src="/icons/plus.svg" alt="add-todo"/>
                </button>
            </div>

            <div className={styles.todosContainer}>
                {categorias[props.index].todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            status={todo.status}
                            title={todo.title}
                            desc={todo.desc}
                        />
                    )
                })}
            </div>
        </div>
    )
}
