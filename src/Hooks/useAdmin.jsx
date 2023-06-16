import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await fetch(`https://summer-camp-school-server-production.up.railway.app/admin/instructor/${user?.email}`);
            console.log('admin response', res);
            return res.data.admin
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;