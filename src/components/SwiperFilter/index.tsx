import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaChevronDown, FaFilter, FaRunning } from 'react-icons/fa';

export function SwiperFilter() {
    return (
        <Swiper
            id={styles.swiper}
            spaceBetween={16}
            slidesPerView="auto"
        >
            <SwiperSlide className={styles.card}>
                <button>Ordenar <FaChevronDown fontSize={8} /></button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button><FaRunning />Pra retirar</button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Entrega Grátis</button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Vale-refeição <FaChevronDown fontSize={8} /></button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Distância <FaChevronDown fontSize={8} /></button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Entrega Parceira</button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Super Restaurantes</button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Filtros <FaFilter /></button>
            </SwiperSlide>
            <SwiperSlide className={styles.card}>
                <button>Limpar</button>
            </SwiperSlide>
        </Swiper>
    )
}