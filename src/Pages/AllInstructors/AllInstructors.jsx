import React from 'react';
import useInstructors from '../../Hooks/useInstructors';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../Shared/PageBanner/PageBanner';
import InstroctorCard from './InstroctorCard';


const AllInstructors = () => {
  const [instructors, isLoading] = useInstructors();

  return (
    <div>
      <Helmet>
        <title>Chorus Camp || Instructors</title>
      </Helmet>
      <PageBanner></PageBanner>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-12">
        {instructors.map((instructor) => (
          <InstroctorCard
          key={instructor._id}
          item={instructor}
          ></InstroctorCard>
        ))}
      </div>
    </div>
    )
};

export default AllInstructors;