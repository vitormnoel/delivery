import { FaChevronUp, FaEllipsisV, FaInfoCircle, FaPlus } from 'react-icons/fa';
import { CreateItem } from '../CreateItem';
import styles from './styles.module.scss';

export function Category({item}) {
    return (
        <div className={styles.category}>
            <div className={styles.header}>
                <span className={styles.title}>{item.name}</span>
                <div className="d-flex gap-4">
                    <div className={styles.togle}>
                        <button>Pausar</button>
                        <button>Ativado</button>
                    </div>
                    <button className={styles.btn_icon}><FaChevronUp /></button>
                    <button className={styles.btn_icon}><FaEllipsisV /></button>
                </div>
            </div>
            <div className={styles.row + ' row'}>
                <div className='col-md-1'>

                </div>
                <div className='col-md-5'>
                    <span className={styles.title}>Item</span>
                </div>
                <div className='col-md-3'>
                    <span className={styles.title}>Preço <FaInfoCircle /></span>
                </div>
                <div className='col-md-3'>
                    <span className={styles.title}>Status de vendas</span>
                </div>
            </div>
            {item.items.length > 0 && item.items.map(item => (
                <div key={item.id} className={styles.row + ' row'}>
                    <div className={styles.col + ' col-md-1'}>
                        <div className={styles.image}>
                            <img src={`http://localhost:3000/${item.image}`}/>
                        </div>
                    </div>
                    <div className={styles.col + ' col-md-5'}>
                        <span className={styles.name}>{item.name}</span>
                        <p>{item.details}</p>
                    </div>
                    <div className={styles.col + ' col-md-3'}>
                        <div className={styles.togle_price}>
                            <button>R$ {item.price},00</button>
                            <button>R$ {item.price},00</button>
                        </div>
                    </div>
                    <div className={styles.col + ' col-md-3 p-0'}>
                        <div className="d-flex justify-content-end gap-4">
                            <div className={styles.togle}>
                                <button>Pausar</button>
                                <button>Ativado</button>
                            </div>
                            <button className={styles.btn_icon}><FaChevronUp /></button>
                            <button className={styles.btn_icon}><FaEllipsisV /></button>
                        </div>
                    </div>
                </div>
            ))}
            <CreateItem menuId={item.code}/>
            
        </div>
    )
}