import styles from './Homepage.module.css'
import Banner from '../module/Banner'
import Attributes from '../module/Attributes'
import Definition from '../module/Definition'

export default function HomePage() {
    return(
        <div className={styles.container}>
        <Banner />
        <Attributes />
        <Definition />
        </div>
    )
}