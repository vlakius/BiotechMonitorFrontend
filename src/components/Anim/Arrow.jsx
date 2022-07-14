import "./Arrow.style.css";

const Arrow = ({ direction }) => {
  return (
    <div className="arrowAnim">
      <div className={`arrowSliding-${direction}`}>
        <div className={`arrow ${direction}`}></div>
      </div>
      <div className={`arrowSliding-${direction} delay1`}>
        <div className={`arrow ${direction}`}></div>
      </div>
      <div className={`arrowSliding-${direction} delay2`}>
        <div className={`arrow ${direction}`}></div>
      </div>
      <div className={`arrowSliding-${direction} delay3`}>
        <div className={`arrow ${direction}`}></div>
      </div>
    </div>
  );
};

export default Arrow;
