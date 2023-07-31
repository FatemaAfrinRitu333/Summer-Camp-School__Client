import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            // TODO: change url to: https://chorus-camp-server.onrender.com
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            console.log('admin response', res);
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;