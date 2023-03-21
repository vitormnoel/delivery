import styles from './styles.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container d-flex flex-column-reverse flex-md-row gap-3 justify-content-between align-items-center">
                <span>2023 - Vitor Manoel.</span>
            </div>
        </footer>
    )
}