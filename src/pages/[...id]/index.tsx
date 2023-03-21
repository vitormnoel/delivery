import { FaChevronDown, FaMotorcycle, FaSearch, FaStar, FaStore } from 'react-icons/fa';
import Motorcycle from '../../assets/Icons/motorcycle.svg'
import { CardFood } from '../../components/CardFood';
import { Footer } from '../../components/Footer';
import { HeaderFluid } from '../../components/HeaderFluid';
import styles from './styles.module.scss';
import {useEffect, useState} from "react";
import axios from "axios";
import {useRouter} from "next/router";

export default function RestaurantView() {
    const [restaurant, setRestaurant] = useState(null);
    const router = useRouter();
    const {id} = router.query;
    const handleRestaurant = async () => {
        const res = await axios.get(`http://localhost:3000/restaurants/${id[id.length - 1]}`).then(res => res.data);
        setRestaurant(res.data);
    }
    useEffect(() => {
        id && handleRestaurant();
    }, [id])
    if(!restaurant) {
        return null
    }
    return (
        <div className={styles.container}>
            <HeaderFluid />
            <div className="container my-4" style={{minHeight: 'calc(100vh - 100px)'}}>
                <div className={styles.banner} style={{backgroundImage: `url(http://localhost:3000${restaurant.banner})`}}>
                    <div className='d-flex align-items-center'>
                        <div className={styles.icon}>
                            <FaStore />
                        </div>
                        <div className='d-flex flex-column'>
                            <h4>Loja fechada</h4>
                            <p>Abre às 17:00</p>
                        </div>
                    </div>
                </div>
                <div className={styles.header + " d-flex align-items-center justify-content-between mt-4"}>
                    <div className={styles.logo}>
                        <img src={`http://localhost:3000` + restaurant.image}/>
                    </div>
                    <div className="d-flex flex-column w-100">
                        <div className="d-flex align-items-center justify-content-between gap-md-4">
                            <h4 className={styles.title}>{restaurant.name}</h4>
                            <div className="d-flex align-items-center">
                                <FaStar />
                                <span>4,6</span>
                            </div>
                        </div>
                        <div className={styles.sub_header + " d-flex justify-content-between align-items-center"}>
                            <a href="">Ver mais</a>
                            <span>Pedido mínimo R$ 16,00</span>
                        </div>
                    </div>
                </div>
                <div className={styles.form + " d-flex flex-wrap mt-4"}>
                    <div className={styles.input_box}>
                        <FaSearch />
                        <input type="text" placeholder='Busque no cardápio' />
                    </div>
                    <button>
                        <span>
                            <img src={Motorcycle.src} alt="" />
                            Entrega
                        </span>
                        <FaChevronDown />
                    </button>
                    <button className="d-flex flex-column">
                        <span>Hoje</span>
                        <span>60-70min . R$ 5,00</span>
                    </button>
                </div>
                {restaurant.menus.length > 0 && restaurant.menus.map(item => (
                    <div key={item.code} className={styles.category}>
                        <h4>{item.name}</h4>
                        <div className="row">
                            {item.items.length > 0 && item.items.map(item => (
                                <div key={item.id} className="col-md-6 mb-4">
                                    <CardFood item={item}/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}