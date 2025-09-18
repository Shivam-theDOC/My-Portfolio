import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div></div>
      <div></div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon icon={icon} key={icon.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
