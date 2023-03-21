import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';
import {useState} from "react";

export function Select({label, placeholder, options, value, onChange}) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.select}>
            <label htmlFor="">{label}</label>
            <button onClick={() => setShow(!show)}>
                {value?.name ?? placeholder}
                <FaChevronDown />
            </button>
            {show &&
                <ul className={`${styles.body} ${show && styles.show}`}>
                    {options?.length > 0 && options.map((item, index) => (
                       <li key={index}>
                           <button onClick={() => {
                               onChange(item);
                               setShow(!show);
                           }}>{item.name}</button>
                       </li>
                    ))}
                </ul>
            }
        </div>
    )
}