import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import { FaChevronDown, FaSearch, FaShoppingBag, FaSignInAlt } from 'react-icons/fa';
import MenuSvg from '../../assets/Icons/menu.svg'
import styles from './styles.module.scss';
import { Bag } from '../Bag';

export function HeaderFluid() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a className={styles.logo}>
                                <img src={Logo.src} alt="" />
                            </a>
                        </Link>
                        <ul className="d-none d-md-flex align-items-center">
                            <Link href="/restaurantes">
                                <a className={styles.link_active}>
                                    Restaurantes
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Mercados
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Bebidas
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Farmácias
                                </a>
                            </Link>
                        </ul>
                    </div>
                    <div className={styles.input_box + ' d-none d-md-flex'}>
                        <FaSearch />
                        <input type="text" placeholder='Busque por item ou loja' />
                    </div>
                    <div className="d-none d-md-flex align-items-center">
                        <Link href="/">
                            <a className={styles.link_active}>
                                R. José Saturnino de Castro, 30
                                <FaChevronDown />
                            </a>
                        </Link>
                        <button className={styles.btn_sign}><FaSignInAlt /></button>
                        <Bag />
                    </div>
                    <button className={styles.button_collapse + ' d-md-none'}>
                        R. José Saturnino de Castro, 30
                        <FaChevronDown />
                    </button>
                </div>
            </nav>
        </header>
    )
}