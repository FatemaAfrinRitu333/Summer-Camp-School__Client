import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const ManageClasses = () => {
    return (
        <div className='w-full mx-auto mb-12'>
            <Helmet>
                <title>Admin || Manage Classes</title>
            </Helmet>
            <SectionTitle heading={'Manage Classes'} subHeading={'Approve, deny pending classes and send feedback'}></SectionTitle>

        </div>
    );
};

export default ManageClasses;