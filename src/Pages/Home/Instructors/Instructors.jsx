import useInstructors from '../../../Hooks/useInstructors';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle'
import InstructorItem from './InstructorItem';
import Skeleton from '@mui/material/Skeleton';

const Instructors = () => {

    const [instructors, isLoading] = useInstructors();
    console.log(instructors);
    const popular = instructors.slice(0, 6);

    if(isLoading){
        return <Skeleton variant="rectangular" width="100%">
      </Skeleton>
    }

    return (
        <div className='my-20'>
            <SectionTitle
            heading={'Instructos'}
            subHeading={'our popular'}
            ></SectionTitle>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    popular.map(instructor=> <InstructorItem
                    key={instructor._id}
                    item={instructor}
                    ></InstructorItem>)
                }
             </div>
        </div>
    );
};

export default Instructors;