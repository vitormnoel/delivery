import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaEnvelope, FaEye, FaLock } from 'react-icons/fa';
import Illustration from '../../assets/illustration.png';
import Logo from '../../assets/logo.svg';
import { AuthContext } from '../../context/AuthContext';

import styles from "./styles.module.scss";

export default function Login() {
    const {email, password, signInRestaurant} = useContext(AuthContext);
    const [active, setActive] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await signInRestaurant();
    }
    return (
        <div className={styles.login + ' container d-flex justify-content-between align-items-center'}>
            <div>
                <img src={Logo.src} alt="Logo" className='mb-4' />
                <h4>Faça seu Login</h4>
                <div className={styles.tab_button}>
                    <button className={active === 1 && styles.active} onClick={() => setActive(1)}>Cliente</button>
                    <button className={active === 2 && styles.active} onClick={() => setActive(2)}>Restaurante</button>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.input_box}>
                        <label htmlFor="">Email</label>
                        <FaEnvelope />
                        <input type="email" required placeholder='Insira seu email' value={email.value} onChange={(e) => email.onChange(e.target.value)}/>
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Password</label>
                        <FaLock />
                        <FaEye />
                        <input type="password" required placeholder='Insira sua senha' value={password.value} onChange={(e) => password.onChange(e.target.value)} />
                    </div>
                    <div className="d-flex justify-content-end mb-4">
                        <Link href={'/forgot-password'}>
                            <a>Esqueceu sua senha?</a>
                        </Link>
                    </div>
                    <button className={styles.button_submit}>Entrar</button>
                    <div className="d-flex justify-content-center mt-4">
                        <Link href={active === 1 ? '/create-user' :  '/create-restaurant'}>
                            <a>Não tem uma conta? <span>SingUp</span></a>
                        </Link>
                    </div>
                </form>
            </div>
            <img src={Illustration.src} alt="" />
        </div>
    )
}