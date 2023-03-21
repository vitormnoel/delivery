import Link from 'next/link';
import { useState } from 'react';
import { FaChevronRight, FaShoppingBag } from 'react-icons/fa';
import {RiCoupon3Fill} from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import styles from './styles.module.scss';

export function Bag() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    return (
        <>
            <button className={styles.bag} onClick={handleShow}>
                <FaShoppingBag />
                <div className='d-flex flex-column align-items-start'>
                    <span className={styles.price}>R$ 23,49</span>
                    <span className={styles.items}>1 itens</span>
                </div>
            </button>
            <nav className={`${styles.aside} ${!show && styles.hidden}`}>
                <button className={styles.btn_close} onClick={handleShow}>
                    <MdClose />
                </button>
                <div className={styles.content}>
                    <div className={styles.header}>
                        <span className='d-block mb-2'>Seu pedido em</span>
                        <div className="d-flex justify-content-between">
                            <h4>Toca da Coxinha</h4>
                            <Link href="">
                                <a>Ver Cardápio</a>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.body}>
                        <span className={styles.category}>Salgados</span>
                        <hr />
                        <div className={styles.item}>
                            <div className="d-flex justify-content-between">
                                <span><span style={{color: 'var(--secondary)', marginRight: 8}}>1x</span> Mini Shake Mix Trufado de Nutella</span>
                                <span>R$ 17,50</span>
                            </div>
                            <div className="d-flex mt-3 gap-3">
                                <button>Editar</button>
                                <button>Remover</button>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.cupom}>
                            <RiCoupon3Fill />
                            <div className="d-flex align-items-center justify-content-between w-100">
                                <div>
                                    <h4>Cupom</h4>
                                    <span>Código de cupom</span>
                                </div>
                                <FaChevronRight />
                            </div>
                        </div>
                        <hr />
                        <div className={styles.price}>
                            <div className={styles.item_price}>
                                <span>Subtotal</span>
                                <span>R$ 17,50</span>
                            </div>
                            <div className={styles.item_price}>
                                <span>Taxa de serviço</span>
                                <span>R$ 0,99</span>
                            </div>
                            <div className={styles.item_price}>
                                <span>Taxa de entrega</span>
                                <span>R$ 5,00</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                    <div className={styles.price}>
                            <div className={styles.item_price}>
                                <span>Total</span>
                                <span>R$ 23,49</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.btn_primary}>Escolher forma de pagamento</button>
                </div>
            </nav>
        </>
    )
}