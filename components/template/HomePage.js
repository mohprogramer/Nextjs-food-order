import styles from './Homepage.module.css'
import Banner from '../module/Banner'
import Attributes from '../module/Attributes'

export default function HomePage() {
    return(
        <div className={styles.container}>
        <Banner />
        <Attributes />
        </div>
    )
}