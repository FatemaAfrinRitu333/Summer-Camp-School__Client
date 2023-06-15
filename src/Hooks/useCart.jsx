import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCart = () => {

    const {data:cart=[], isLoading, refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/cart');
            return res.json();
        }
    })

    return [cart, isLoading, refetch]
};

export default useCart;