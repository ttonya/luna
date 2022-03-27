import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Chart from "./components/chart/Chart";
import Header from "./components/header/Header";
import { AppState, onAppInit } from "./store/App.state";

function App() {
  const dispatch = useDispatch();
  const { assetData, aprData } = useSelector((state: AppState) => state);

  const { tvlStakedHistory } = assetData.selected_farm[0];

  useEffect(() => {
    dispatch(onAppInit());
  }, []);

  return (
    <div className="App">
      <Header title={assetData.asset} />
      <div className="App__container">
        <div className="App__chart">
          <div className="App__chart-header">Asset APR (y)</div>
          <Chart
            data={aprData}
            yAxisTickFormatter={(tick) => `${tick}%`}
          ></Chart>
        </div>
        <div className="App__chart">
          <div className="App__chart-header">Asset TVL</div>
          <Chart data={tvlStakedHistory}></Chart>
        </div>
      </div>
    </div>
  );
}

export default App;
