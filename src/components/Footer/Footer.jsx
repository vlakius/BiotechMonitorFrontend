import "./Footer.style.css";
import logo from "../Images/logo-biotech.png";

const Footer = () => {
  return (
    <div className="footer">
      <span>Powered by</span>
      <span>
        <img src={logo} alt="" />
      </span>
    </div>
  );
};

export default Footer;
