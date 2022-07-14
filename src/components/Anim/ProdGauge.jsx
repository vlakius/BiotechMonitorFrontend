import Gauge from "react-gaugejs";

const ProdGauge = ({ value, maxValue }) => {
  const opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0, // // Relative to gauge radius
      strokeWidth: 0, // The thickness
      color: "#606060", // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    percentColors: [
      [0.0, "#ff0000"],
      [0.25, "#f9c802"],
      [0.5, "#a9d70b"],
      [1, "#00e600"],
    ],
    colorStart: "#6F6EA0", // Colors
    colorStop: "#C0C0DB", // just experiment with them
    strokeColor: "#EEEEEE", // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    // renderTicks is Optional
    renderTicks: {
      divisions: 5,
      divWidth: 1,
      divLength: 0.7,
      divColor: "#333333",
      subDivisions: 3,
      subLength: 0.5,
      subWidth: 0.6,
      subColor: "#666666",
    },
  };

  return (
    <>
      <Gauge
        value={value}
        minValue={0}
        maxValue={maxValue}
        animationSpeed={32}
        options={opts}
        className="gauge-canvas"
      />
    </>
  );
};

export default ProdGauge;
