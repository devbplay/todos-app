import styles from '../styles/components/NavigationBar.module.scss'

export default function NavigationBar() {
    return (
        <div className={styles.container}>
            <header>
                <span>.mathsbrain</span>
            </header>

            <nav>
                <ul>
                    <li>
                        <img src="/icons/home.svg" alt="icon"/>
                        <span>Overview</span>
                    </li>
                    <li>
                        <img src="/icons/stats.svg" alt="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <img src="/icons/folder.svg" alt="icon"/>
                        <span>Projects</span>
                    </li>
                    <li>
                        <img src="/icons/chat.svg" alt="icon" className={styles.chatIcon}/>
                        <span>Chat</span>
                    </li>
                    <li>
                        <img src="/icons/calendar.svg" alt="icon"/>
                        <span>Calendar</span>
                    </li>
                </ul>
            </nav>

            <nav className={styles.navLogout}>
                <ul>
                    <li>
                        <img src="/icons/settings.svg" alt="icon"/>
                        <span>Settings</span>
                    </li>
                    <li>
                        <img src="/icons/logout.svg" alt="icon" className={styles.logoutIcon}/>
                        <span>Log out</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
