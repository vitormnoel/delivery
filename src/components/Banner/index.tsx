import Link from 'next/link';
import Mockup from '../../assets/mockup.png';
import styles from './styles.module.scss';

export function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.container + " container d-flex flex-wrap align-items-center justify-content-between"}>
                <div className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-4">
                        <h1>Snack</h1>
                        <div className="d-flex flex-column justify-content-end">
                            <h2>Food</h2>
                            <h2>Delivery</h2>
                        </div>
                    </div>
                    <p>Para terminar o dia, não pode faltar nosso delivery! Você não precisa mais sair de casa para saborear nossas delícias. Agora, entregamos tudo com rapidez e agilidade! A fome bateu?</p>
                    <div className="d-flex gap-3">
                        <Link href="/restaurantes">
                            <a className={styles.btn_primary}>Peça agora</a>
                        </Link>
                        <Link href="/">
                            <a className={styles.btn_secondary}>Saiba mais</a>
                        </Link>
                    </div>
                </div>
                <div className={styles.content_image}>
                    <span></span>
                    <span></span>
                    <img src={Mockup.src} alt="" />
                </div>
            </div>
            <div className={styles.container + " container d-flex flex-column align-items-md-center justify-content-center mt-5 pt-4"}>
                <h3>Tudo pra facilitar seu dia a dia</h3>
                <p>O que você precisa está aqui. Peça e receba onde estiver.</p>
                <div className={styles.input_box}>
                    <input type="text" placeholder='Endereço de entrega e número'/>
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}