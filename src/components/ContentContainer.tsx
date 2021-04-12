import styles from '../styles/components/ContentContainer.module.scss'
import SectionTodo from './SectionTodo'

import categorias from '../../categorias.json'

export default function ContentContainer() {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.leftHeader}>
                    <img src="/icons/search.svg" alt="search-icon"/>
                    <input type="text" className={styles.inputSearch} placeholder="Search" />
                </div>
                <div className={styles.rightHeader}>
                    <img src="/icons/information.svg" alt="help-icon"/>

                    <img src="/icons/notification.svg" alt="notific-icon"/>

                    <span>Matheus Antunes <img src="/icons/arrow.svg" alt="arrow-icon" className={styles.arrowImg} /></span>

                    <img src="/perfil.jpg" alt="perfil" className={styles.perfilImg} />
                </div>
            </header>

            <main>
                <div className={styles.headerMain}>
                    <div className={styles.leftHeaderMain}>
                        <span>Projects</span>
                    </div>
                    <div className={styles.rightHeaderMain}>
                        <span>This week <img src="/icons/arrow.svg" alt="arrow-icon" className={styles.arrowImg} /></span>
                    </div>
                </div>

                <div className={styles.bodyMain}>
                    <div className={styles.contentMain}>
                        {categorias.map(({ id, name }) => {
                            return (
                                <SectionTodo key={id} title={name} qtd={categorias[id].todos.length} index={id} />
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
