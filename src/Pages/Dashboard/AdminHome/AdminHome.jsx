import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const AdminHome = () => {
    return (
        <div>
            <div>
            <Helmet>
                <title>Chorus Camp || Student DashBoard</title>
            </Helmet>
            <SectionTitle heading={'Admin Dashboard'} subHeading={'welcome to'}></SectionTitle>
        </div>
        </div>
    );
};

export default AdminHome;