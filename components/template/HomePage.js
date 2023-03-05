import styles from './Homepage.module.css'
import Banner from '../module/Banner'
import Attributes from '../module/Attributes'
import Definition from '../module/Definition'
import Companies from '../module/Companies'
import Instruction from '../module/Instructions'
import Guide from '../module/Guide'
import Restrictions from '../module/Restrictions'

export default function HomePage() {
    return(
        <div className={styles.container}>
        <Banner />
        <Attributes />
        <Definition />
        <Companies />
        <Instruction />
        <Guide />
        <Restrictions />
        </div>
    )
}