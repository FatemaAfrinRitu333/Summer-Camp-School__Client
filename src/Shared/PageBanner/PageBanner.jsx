import musicNote from '../../assets/music-note.jfif';
import SectionTitle from '../SectionTitle/SectionTitle';

const PageBanner = ({title, subTitle}) => {
  return (
    <div
      className="hero -z-10"
      style={{backgroundImage: `url('${musicNote}')`, backgroundSize: 'cover'}}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-accent">
        <div className="-z-10">
          <SectionTitle heading={title} subHeading={subTitle}></SectionTitle>       
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
