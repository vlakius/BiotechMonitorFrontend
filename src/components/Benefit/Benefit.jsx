import "./Benefit.style.css";
import AnimatedNumber from "react-animated-number";

const Benefit = ({ icon, title, value, unit }) => {
  return (
    <div className="benefit-container">
      <div className="benefit-icon">
        <img src={icon} alt="benefit-icon" />
      </div>
      <div className="benefit">
        <div className="benefit-title">
          <span>{title}</span>
        </div>
        <div className="benefit-value">
          <AnimatedNumber
            value={value}
            style={{
              transition: "0.8s ease-out",
              transitionProperty: "background-color, color, opacity",
            }}
            formatValue={(value) => value.toFixed(0)}
            duration={1000}
          />
          <span>{unit}</span>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
