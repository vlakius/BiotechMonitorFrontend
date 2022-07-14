import "./App.css";
import ProdGauge from "./components/Anim/ProdGauge";
import Header from "./components/Header/Header";
import Energy from "./components/Energy/Energy";
import Benefit from "./components/Benefit/Benefit";
import PowerFlow from "./components/PowerFlow/PowerFlow";
import Pylon from "./components/Anim/Pylon";
import Footer from "./components/Footer/Footer";
import Arrow from "./components/Anim/Arrow";
import Factory from "./components/Anim/Factory";
import tree from "./components/Images/tree.png";
import greenFactory from "./components/Images/factory-green.png";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [dailyEnergy, setDailyEnergy] = useState("-");
  const [monthlyEnergy, setMonthlyEnergy] = useState("-");
  const [yearlyEnergy, setYearlyEnergy] = useState("-");
  const [totalEnergy, setTotalEnergy] = useState("-");
  const [benefitTree, setBenefitTree] = useState("-");
  const [benefitCarbon, setBenefitCarbon] = useState("-");
  const [powerProduction, setPowerProduction] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);
  const [powerRelease, setPowerRelease] = useState(0);
  const [powerFlowUnit, setPowerFlowUnit] = useState();

  const getData = async () => {
    const { data } = await axios.get(
      "http://api.monitor.biotechenergia.it/api/v1/2"
    );
    setDailyEnergy({
      value: data.overview.daylyEnergy.value,
      unit: data.overview.daylyEnergy.unit,
    });
    setMonthlyEnergy({
      value: data.overview.monthlyEnergy.value,
      unit: data.overview.monthlyEnergy.unit,
    });

    setYearlyEnergy({
      value: data.overview.annualEnergy.value,
      unit: data.overview.annualEnergy.unit,
    });
    setTotalEnergy({
      value: data.overview.totalEnergy.value,
      unit: data.overview.totalEnergy.unit,
    });
    setBenefitTree({
      value: data.benefits.treesPlanted.value,
      unit: data.benefits.treesPlanted.unit,
    });
    setBenefitCarbon({
      value: data.benefits.carbonOffset.value,
      unit: data.benefits.carbonOffset.unit,
    });
    setPowerFlowUnit(data.currentPowerFlow.unit);

    setPowerProduction(data.currentPowerFlow.producing);
    setPowerConsumption(data.currentPowerFlow.consuming);
    setPowerRelease(data.currentPowerFlow.releasing);
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const [smallscreen, setSmallscreen] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener("change", (e) => setSmallscreen(e.matches));
  }, []);

  return (
    <>
      <Header />
      <div className="energy-group">
        <Energy
          title="Energia giornaliera"
          value={dailyEnergy.value}
          unit={dailyEnergy.unit}
        />
        <Energy
          title="Energia mensile"
          value={monthlyEnergy.value}
          unit={monthlyEnergy.unit}
        />
        <Energy
          title="Energia annuale"
          value={yearlyEnergy.value}
          unit={yearlyEnergy.unit}
        />
        <Energy
          title="Energia totale"
          value={totalEnergy.value}
          unit={totalEnergy.unit}
        />
      </div>
      <div className="benefits-group">
        <Benefit
          icon={tree}
          title="Alberi Piantati"
          value={benefitTree.value}
          unit={benefitTree.unit}
        />
        <Benefit
          icon={greenFactory}
          title="Offset di carbonio"
          value={benefitCarbon.value}
          unit={benefitCarbon.unit}
        />
      </div>
      <div className="powerflow-group">
        <PowerFlow
          title="Potenza prodotta"
          anim={<ProdGauge value={powerProduction} maxValue={200} />}
          value={powerProduction}
          unit={powerFlowUnit}
          style={
            smallscreen
              ? { margin: "30px" }
              : {
                  margin: 0,
                  marginTop: "30px",
                }
          }
        />
        <Arrow direction="right" />
        <PowerFlow
          title="Potenza consumata"
          anim={<Factory />}
          value={powerConsumption}
          unit={powerFlowUnit}
        />
        <Arrow
          direction={powerConsumption >= powerProduction ? "left" : "right"}
        />
        <PowerFlow
          title="Potenza rilasciata"
          anim={<Pylon />}
          value={powerRelease}
          unit={powerFlowUnit}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
