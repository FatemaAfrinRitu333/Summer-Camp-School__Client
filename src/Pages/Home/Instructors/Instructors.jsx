import useInstructors from '../../../Hooks/useInstructors';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle'
import InstructorItem from './InstructorItem';

const Instructors = () => {

    const [instructors] = useInstructors();
    console.log(instructors);

    return (
        <div className='my-20'>
            <SectionTitle
            heading={'Instructos'}
            subHeading={'our popular'}
            ></SectionTitle>
             <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    instructors.map(instructor=> <InstructorItem
                    key={instructor._id}
                    item={instructor}
                    ></InstructorItem>)
                }
             </div>
        </div>
    );
};

export default Instructors;