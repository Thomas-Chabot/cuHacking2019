import React, {Component} from "react";
import VerticalFlex from "./flex/Vertical.js";
import Chart from "./Chart.js";
import Warnings from "./Warnings.js";
import "./css/WarningsView.css";

class WarningsView extends Component {
  componentDidMount(){
    this.addDataPoint("Foo", 0.75);
    this.addDataPoint("Bar", 0.90);
    this.addDataPoint("bad", 0.01);
  }

  addDataPoint(name, value){
    this.chart.addDataPoint(name, value);
    this.databoxes.addDataPoint(name, value);
  }

  reset(){
    this.chart.reset();
    this.databoxes.reset();
  }

  render(){
    return <div id="WarningsView">
      <VerticalFlex>
        <Chart ref={ (e)=>{ this.chart=e; } }/>
        <Warnings ref={ (e)=>{ this.databoxes=e; }} />
      </VerticalFlex>
    </div>;
  }
}

export default WarningsView;
