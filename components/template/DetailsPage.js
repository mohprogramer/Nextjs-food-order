import Dollar from '../icons/Dollar';
import Location from '../icons/Location';
import styles from './DetailsPage.module.css'

export default function DetailsPage({data}) {
    const {id, name, price,discount,introduction, details, ingredients, recipe } = data;
    return(
        <div className={styles.container}>
            <h2>Details</h2>
            <div className={styles.sunContainer}>
                <div className={styles.banner}>
                    <img src={`/images/${id}.jpeg`} alt={name} />
                    <div>
                        <h3>{name}</h3>
                        <span className={styles.location}>
                            <Location />
                            {details[0].Cuisine}
                        </span>
                        <span className={styles.price}>
                            <Dollar />
                            {discount? price * (100 - discount)/100 : price}
                        </span>
                        {discount? <span className={styles.discount}>{discount}% OFF</span> :null}
                    </div>
                </div>
                <div className={styles.introduction}>
                    <div>
                        {introduction}
                    </div>
                </div>
                <div className={styles.details}>
                    <h4>Details</h4>
                    <ul>
                        {details.map((item, index)=>(
                            <li key={index}>
                                <p>{Object.keys(item)[0]}</p>  
                                <span>{Object.values(item)[0]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.details}>
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
                <div className={styles.recipe}>
                    <h4>Recipe</h4>
                    {
                        recipe.map((item , index) => <div key={index} className={index % 2 ? styles.odd : styles.even}>
                            <span>{index + 1}</span>
                            <p>{item}</p>
                        </div>)
                    }
                </div>
                <button >Add to cart</button>
            </div>
        </div>
    )
}