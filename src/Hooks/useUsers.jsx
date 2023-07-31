import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const {user, loading} = useContext(AuthContext);

    const {data:users=[], refetch} = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await fetch(`https://chorus-camp-server.onrender.com/users`);
            return res.json();
        }
    })

    return [users, refetch]
};

export default useUsers;