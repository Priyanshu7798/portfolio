import { logoIconsList } from '../../constants';

const LogoIcon = ({ icon }) => {
  return (
    <div className='flex-none flex-center marquee-item'>
      <img src={icon.imgPath} alt={icon.name} className='w-16 h-16 object-contain' />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className='md:my-15 my-10 relative size-10'>
      <div className='gradient-edge' />
      <div className='gradient-edge' />

      <div className='marquee h-16'>
        <div className='marquee-box md:gap-5 gap-2'>
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={`${icon.name}-copy`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
