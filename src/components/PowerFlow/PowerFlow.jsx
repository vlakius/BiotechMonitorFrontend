import "./PowerFlow.style.css";
import AnimatedNumber from "react-animated-number";

const Powerflow = ({ title, anim, value, unit, style }) => {
  return (
    <div className="powerflow">
      <div className="powerflow-title">
        <span>{title}</span>
      </div>
      <div className="powerflow-anim" style={style}>
        {anim}
      </div>
      <div className="powerflow-value">
        <AnimatedNumber
          value={value}
          style={{
            transition: "0.8s ease-out",
            transitionProperty: "background-color, color, opacity",
          }}
          formatValue={(value) => value.toFixed(2)}
          duration={1000}
        />
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default Powerflow;
