import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const InstructorHome = () => {
    return (
        <div>
            <Helmet>
                <title>Chorus || Instructor Dashboard</title>
            </Helmet>
            <SectionTitle heading={'Instructor'} subHeading={'Welcome to instructor dashboard'}></SectionTitle>
            
        </div>
    );
};

export default InstructorHome;