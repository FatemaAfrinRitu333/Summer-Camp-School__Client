import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const InstructorHome = () => {
    return (
        <div>
            <div>
            <Helmet>
                <title>Chorus Camp || Student DashBoard</title>
            </Helmet>
            <SectionTitle heading={'Instructor Dashboard'} subHeading={'welcome to'}></SectionTitle>
        </div>
        </div>
    );
};

export default InstructorHome;