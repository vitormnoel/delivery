import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import styles from './styles.module.scss';
import { FaStar } from 'react-icons/fa';

export function SwiperBestRestaurants({title}) {
    return (
        <div className={styles.container + ' container best-restaurants'}>
                <h3>Famosos no <span style={{color: 'var(--main)', fontWeight: '700'}}>Snack</span><span style={{color: 'var(--secondary)', fontWeight: '700'}}>Delivery</span></h3>
                <Swiper
                    id={styles.swiper}
                    modules={[Navigation]}
                    spaceBetween={16}
                    slidesPerView="auto"
                    navigation
                >
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                    <SwiperSlide className={styles.card}>
                        <div className={styles.avatar}>

                        </div>
                        <div className={styles.content_card}>
                            <h4>Name</h4>
                            <span>Category</span>
                        </div>
                        <FaStar />
                    </SwiperSlide>
                </Swiper>
        </div>
    );
}