import React, {Component} from "react";
import VerticalFlex from "./flex/Vertical.js";
import Chart from "./Chart.js";
import "./css/WarningsView.css";

class WarningsView extends Component {
  componentDidMount(){
    this.chart.addDataPoint("Foo", 0.75);
    this.chart.addDataPoint("Bar", 0.90);
    this.chart.addDataPoint("bad", 0.01);
  }

  render(){
    return <div id="WarningsView">
      <VerticalFlex>
        <Chart ref={ (e)=>{ this.chart=e } }/>
      </VerticalFlex>
    </div>;
  }
}

export default WarningsView;
