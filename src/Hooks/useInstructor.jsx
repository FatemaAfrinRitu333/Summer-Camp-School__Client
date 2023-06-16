import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await fetch(`https://summer-camp-school-server-production.up.railway.app/users/instructor/${user?.email}`);
            console.log('instructor response', res);
            return res.data.admin
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;