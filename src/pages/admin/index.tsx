import { Aside } from '../../components/Aside';
import styles from './styles.module.scss';

export default function Admin() {
    return (
        <div className={styles.admin}>
            <Aside />
        </div>
    )
}