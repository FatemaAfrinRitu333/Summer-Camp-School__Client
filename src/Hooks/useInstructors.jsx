import { useQuery } from '@tanstack/react-query';

const useInstructors = () => {

    const {data:instructors=[], isLoading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await fetch('https://summer-camp-school-server-production.up.railway.app/instructors');
            return res.json();
        }
    });

    return [instructors, isLoading, refetch];
};

export default useInstructors;