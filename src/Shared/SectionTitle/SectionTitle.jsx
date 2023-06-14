import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-fit mx-auto my-12'>
            {subHeading && <p className='divider text-neutral capitalize'>{subHeading}</p>}
            <h3 className='text-3xl uppercase text-green-900 border-y-2 border-warning/60 py-3 px-5'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;