import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useCart = () => {
    const {user, loading} = useContext(AuthContext);

    const {data:cart=[], refetch} = useQuery({
        queryKey: ['cart'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`, {headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }});
            return res.json();
        }
    })

    return [cart, refetch]
};

export default useCart;