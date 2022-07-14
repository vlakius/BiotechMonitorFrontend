import "./Energy.style.css";
import AnimatedNumber from "react-animated-number";

const Energy = ({ title, value, unit }) => {
  return (
    <div className="energy">
      <div className="energy-title">{title}</div>
      <div className="energy-value">
        <AnimatedNumber
          value={value}
          style={{
            transition: "0.8s ease-out",
            transitionProperty: "background-color, color, opacity",
          }}
          formatValue={(value) => value.toFixed(1)}
          duration={1000}
        />
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default Energy;
