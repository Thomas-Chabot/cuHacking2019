import React, {Component} from "react";
import VerticalFlex from "./flex/Vertical.js";
import EntryPopup from "./EntryPopup.js";
import "./css/TextEntryBox.css";

class TextEntryBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: "",
      expanded: false
    };
  }

  get value(){ return this._textbox.value; }

  clear(){
    if (!this._textbox)
      return;
    this._textbox.clear();
  }

  expand(){
    this.setState({expanded: true})
  }
  minimize(){
    this.setState({expanded: false});
  }

  handleChange = value => {
    this.props.OnTextChange(value);
  }
  handleClick = value => {
    this.minimize();
    this.props.OnSendMessage(value);
  }
  startAnimating = event => {
    this.setState({expanded: true});
  }

  render(){
    if (this.state.expanded){
      //return <EntryPopup />;
      return <EntryPopup ref={(e)=>{this._textbox = e;}}
                         OnSendMessage={this.handleClick}
                         OnTextChange={this.handleChange} />;
    }

    return <input className="entry-box-small" type="text" onClick={this.startAnimating} />
  }
}

export default TextEntryBox;
