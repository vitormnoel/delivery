import styles from './styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { categories } from '../../../utils/categories';

export function SwiperCategories() {
    return (
        <Swiper
            id={styles.swiper}
            spaceBetween={0}
            slidesPerView="auto"
        >
            {categories.map(item => (
                <SwiperSlide key={item.id} className={styles.card}>
                    <div className={styles.avatar}>
                        <img src={item.img} alt="" />
                        <span></span>
                    </div>
                    <div className={styles.content_card}>
                        <h4>{item.name}</h4>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}