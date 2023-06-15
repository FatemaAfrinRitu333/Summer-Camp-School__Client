import './SectionTitle.css';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-fit mx-auto my-12 banner'>
            {subHeading && <p className='divider text-sm md:text-base text-neutral capitalize'>{subHeading}</p>} 
            {/* animate__animated animate__swing animate__delay-2s */}
            <h3 className='md:text-3xl text-lg uppercase text-green-900 font-bold border-y-2 border-warning/60 py-3 px-5'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;