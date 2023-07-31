import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            // TODO: change url to: https://chorus-camp-server.onrender.com
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
            console.log('instructor response', res.data.instructor);
            return res.data.instructor
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;