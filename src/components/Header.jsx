import styles from './Header.module.css'



import logo_rocket from '../assets/logo_rocket.svg'

import title_todo from '../assets/title_todo.svg'



export function Header () {
    return (
        <header  className={styles.header}>
            <div>
                <img src={logo_rocket} alt="Logo rocket" className={styles.logo}/>
            </div>
            <div>
                <img src={title_todo} alt="Title page"  className={styles.title}/>
            </div>

        </header>

    )
}