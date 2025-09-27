import { socialImgs } from "../constants/index.js";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img) => (
            <a href={img.url} key={img.url} className="icon" target="_blank">
              <img src={img.imgPath} alt="socialIcon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Shivam Singh | Dev Doc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
