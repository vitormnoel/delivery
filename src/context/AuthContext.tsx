import axios from "axios";
import { parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import router from "next/router";

type AuthType = {
    email,
    password,
    signInRestaurant,
    restaurant
}

export const AuthContext = createContext({} as AuthType);

export function AuthProvider({children}) {
    const email = useForm();
    const password = useForm();
    const [user, setUser] = useState(null);
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const { 'user.token': tokenUser } = parseCookies();
        const { 'restaurant.token': tokenRestaurant } = parseCookies();
        tokenUser && recoverUserInformation().then((response: any) => {
            setUser(response.user)
        });
        tokenRestaurant && recoverRestaurantInformation().then((response: any) => {
            setRestaurant(response.restaurant)
        })
    }, [])

    const recoverUserInformation = async () => {
        const { 'user': object } = parseCookies();
        const userObject = JSON.parse(object);
        return {
          user: userObject
        }
    }

    const recoverRestaurantInformation = async () => {
        const { 'restaurant': object } = parseCookies();
        const restaurantObject = JSON.parse(object);
        return {
            restaurant: restaurantObject
        }
    }

    const setCookies = (data: any, name: string) => setCookie(undefined, name, data, { maxAge: 60 * 60 * 1, path: '/', })

    const signInRestaurant = async () => {
        const {restaurant, token} = await axios.post('http://localhost:3000/auth/restaurant', {
            email: email.value,
            password: password.value
        }).then(res => res.data);
        if(token) {
            setCookies(token, 'restaurant.token');
            setRestaurant(restaurant);
            setCookies(JSON.stringify(restaurant), 'restaurant');
            router.push('/admin');
        }
    }
    const signOutRestaurant = async () => {

    }
    const signInUser = async () => {

    }
    const signOutUser = async () => {

    }
    
    return (
        <AuthContext.Provider value={{
            email,
            password,
            signInRestaurant,
            restaurant
        }}>
            {children}
        </AuthContext.Provider>
    )
}