import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const AdminHome = () => {
    return (
        <div>
            <Helmet>
                <title>Chorus || Admin Dashboard</title>
            </Helmet>
            <SectionTitle heading={'Admin'} subHeading={'welcome to admin dashboard'}></SectionTitle>
            
        </div>
    );
};

export default AdminHome;