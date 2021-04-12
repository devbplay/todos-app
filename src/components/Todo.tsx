import { useEffect, useState } from 'react'
import styles from '../styles/components/Todo.module.scss'

interface TodoProps {
    status: number;
    title: string;
    desc: string;
}

export default function Todo(props: TodoProps) {
    const [status, setStatus] = useState("#3c3c3c")

    useEffect(() => {
        if (props.status === 0) {
            setStatus("#3A62F2")
        } else if (props.status === 1) {
            setStatus("#ffdd00")
        } else if (props.status === 2) {
            setStatus("#F85151")
        }
    }, [])

    return (
        <div className={styles.container} draggable={true}>
            <div className={styles.areaTitleTodo}>
                <div className={styles.title}>
                    <span style={{ color: status }}>•</span>
                    <span className={styles.titleTodo}>{ props.title }</span>
                </div>
                <div className={styles.clipArea}>
                    <img src="/icons/clip.svg" alt="clip-icon" />
                </div>
            </div>

            <div className={styles.descTodo}>{ props.desc }</div>
        </div>
    )
}
