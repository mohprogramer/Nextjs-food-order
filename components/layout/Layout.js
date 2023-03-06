import Link from 'next/link'
import styles from './Layout.module.css'

export default function Layout({children}) {
    return(
        <>
        <header className={styles.header}>
            <div className={styles.left}>
                <Link href="/">Botofood</Link>
            </div>
            <div className={styles.right}>
               <Link href="/menu">Menu</Link>
               <Link href="/categorie" >Categorie</Link>
            </div>
        </header>
        <div className={styles.container}>
            {children}
        </div>
        <footer className={styles.footer}>
            <a href="https://github.com/mohprogramer" target="_blank" rel="noreferrer">Visit my Github </a>
            | BotoFood project &copy;
        </footer>
        </>
    )
}
