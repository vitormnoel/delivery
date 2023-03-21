import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import Link from 'next/link';
import { FaBook, FaDollarSign, FaHome, FaReceipt } from 'react-icons/fa';
import { useRouter } from "next/router";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Image from 'next/image';

export function Aside() {
    const {restaurant} = useContext(AuthContext);
    const router = useRouter();
    return (
        <div className={styles.aside}>
            <Link href='/'>
                <a className={styles.logo}>
                    <Image src={Logo.src} alt="Logo" />
                </a>
            </Link>
            <div className={styles.store}>
                <div className={styles.avatar}>
                    {restaurant?.image && <Image src={'/' + restaurant.image} alt="TO DO" />}
                </div>
                <h4>{restaurant?.name}</h4>
                <span>Loja Fechada</span>
            </div>
            <div className={styles.nav_links}>
                <Link href="/admin">
                    <a className={router.asPath === '/admin' && styles.active}>
                        <div className={styles.icon}>
                            <FaHome />
                        </div>
                        Inicio
                    </a>
                </Link>
                <Link href="/admin">
                    <a>
                        <div className={styles.icon}>
                            <FaReceipt />
                        </div>
                        Pedidos
                    </a>
                </Link>
                <Link href="/admin">
                    <a>
                        <div className={styles.icon}>
                            <FaDollarSign />
                        </div>
                        Financeiro
                    </a>
                </Link>
                <Link href="/admin/cardapios">
                    <a className={router.asPath === '/admin/cardapios' && styles.active}>
                        <div className={styles.icon}>
                            <FaBook />
                        </div>
                        Cardápios
                    </a>
                </Link>
            </div>
        </div>
    )
}