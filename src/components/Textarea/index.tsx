import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

export function Textarea({label, placeholder, value, onChange}) {
    return (
        <div className={styles.input}>
            <label htmlFor="">{label}</label>
            <textarea placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}