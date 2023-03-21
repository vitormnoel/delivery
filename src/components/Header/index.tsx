import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import MenuSvg from '../../assets/Icons/menu.svg'
import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link href="/">
                            <a>
                                <img src={Logo.src} alt="" />
                            </a>
                        </Link>
                        <div className="d-none d-md-flex align-items-center">
                            <Link href="/">
                                <a className={styles.link_active}>
                                    Para clientes
                                </a>
                            </Link>
                            <Link href="/">
                                <a>
                                    Para restaurantes
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="d-none d-md-flex align-items-center">
                        <Link href="/">
                            <a className={styles.link_active}>
                                Criar conta
                            </a>
                        </Link>
                        <Link href="/login">
                            <a className={styles.btn}>Entrar</a>
                        </Link>
                    </div>
                    <button className={styles.button_collapse + ' d-md-none'}>
                        <img src={MenuSvg.src} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    )
}