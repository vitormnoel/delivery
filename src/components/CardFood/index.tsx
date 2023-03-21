import styles from './styles.module.scss';

export function CardFood({item}) {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div>
                    <h4 className={styles.title}>{item.name}</h4>
                    <p>{item.details}</p>
                </div>
                <span className={styles.price}>R$ {item.price},00</span>
            </div>
            <div className={styles.avatar}>
                <img src={`http://localhost:3000` + item.image} />
            </div>
        </div>
    )
}