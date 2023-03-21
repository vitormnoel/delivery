import {FaChevronRight, FaHome, FaReceipt, FaSearch, FaShoppingBag, FaUser} from 'react-icons/fa';
import styles from './styles.module.scss';
import {MdClose} from "react-icons/md";
import Link from "next/link";
import {RiCoupon3Fill} from "react-icons/ri";
import {useState} from "react";
export function BottomBar() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    return (
        <div className={styles.bottom_bar}>
            <nav className={styles.navtop}>
                <div className={styles.items}>
                    <FaShoppingBag />
                    <span>10</span>
                </div>
                <button onClick={handleShow}>Ver sacola</button>
                <span>R$ 23,49</span>
            </nav>
            <nav className={styles.navbottom}>
                <button className={styles.active}>
                    <FaHome />
                    Inicio
                </button>
                <button>
                    <FaSearch />
                    Buscar
                </button>
                <button>
                    <FaReceipt />
                    Pedidos
                </button>
                <button>
                    <FaUser />
                    Perfil
                </button>
            </nav>
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
                        <button className={styles.btn_primary}>Escolher forma de pagamento</button>
                    </div>

                </div>
            </nav>
        </div>
    )
}