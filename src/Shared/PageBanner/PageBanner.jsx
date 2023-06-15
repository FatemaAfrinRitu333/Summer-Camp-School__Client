import musicNote from '../../assets/music-note.jfif';
import SectionTitle from '../SectionTitle/SectionTitle';

const PageBanner = ({title, subTitle}) => {
  return (
    <div
      className="hero -z-10"
      style={{backgroundImage: `url('${musicNote}')`, backgroundSize: 'cover'}}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-accent w-full">
        <div className="bg-white/50 w-full">
          <SectionTitle heading={title} subHeading={subTitle}></SectionTitle>       
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
