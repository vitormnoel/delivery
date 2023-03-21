import Link from 'next/link';
import Illustration from '../../assets/illustration.png';
import Logo from '../../assets/logo.svg';
import { FaEnvelope, FaEye, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';
import styles from './styles.module.scss';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';

export default function CreateRestaurant() {
    const name = useForm();
    const phone = useForm();
    const email = useForm();
    const password = useForm();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:3000/restaurants/new', {
            name: name.value,
            phone: phone.value,
            email: email.value,
            password: password.value
        }).then(res => res.data);
        console.log(res);
    }
    return (
        <div className={styles.login + ' container d-flex justify-content-between align-items-center'}>
            <div>
                <img src={Logo.src} alt="Logo" className='mb-4' />
                <h4>Crie sua conta para gerenciar o seu negócio </h4>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.input_box}>
                        <label htmlFor="">Nome</label>
                        <FaUser />
                        <input type="text" required placeholder='Insira seu nome completo' value={name.value} onChange={(e) => name.onChange(e.target.value)} />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Telefone/Celular</label>
                        <FaPhoneAlt />
                        <input type="tel" required placeholder='Insira seu Telefone/Celular' value={phone.value} onChange={(e) => phone.onChange(e.target.value)} />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Email</label>
                        <FaEnvelope />
                        <input type="email" required placeholder='Insira seu email' value={email.value} onChange={(e) => email.onChange(e.target.value)} />
                    </div>
                    <div className={styles.input_box}>
                        <label htmlFor="">Password</label>
                        <FaLock />
                        <FaEye />
                        <input type="password" required placeholder='Insira sua senha' value={password.value} onChange={(e) => password.onChange(e.target.value)} />
                    </div>
                    <button className={styles.button_submit}>Criar conta</button>
                    <div className="d-flex justify-content-center mt-4">
                        <Link href={'/login'}>
                            <a>Já tem uma conta? <span>SingIn</span></a>
                        </Link>
                    </div>
                </form>
            </div>
            <img src={Illustration.src} alt="" />
        </div>
    )
}