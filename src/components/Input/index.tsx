import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Input({label, placeholder, value, onChange}) {
    return (
        <div className={styles.input}>
            <label htmlFor="">{label}</label>
            <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}