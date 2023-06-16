import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const StudentHome = () => {
    return (
        <div>
            <Helmet>
                <title>Chorus Camp || Student DashBoard</title>
            </Helmet>
            <SectionTitle heading={'Student Dashboard'} subHeading={'welcome to'}></SectionTitle>
        </div>
    );
};

export default StudentHome;