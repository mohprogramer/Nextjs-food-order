import styles from './MenuPage.module.css'
import Card from '../module/Card'

export default function MenuPage({data}) {
    return(
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
               {
                data.map(food => <Card key={food.id} {...food} />)
               } 
            </div>
        </div>
    )
}