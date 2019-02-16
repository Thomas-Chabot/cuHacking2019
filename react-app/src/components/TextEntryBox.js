import React, {Component} from "react";
import VerticalFlex from "./flex/Vertical.js";
import "./css/TextEntryBox.css";

class TextEntryBox extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    };
  }

  get value(){ return this._textbox.value; }
  set value(t){ this.setState({value: t}); }

  clear(){ this.value = ""; }

  handleChange = event => {
    this.value = event.target.value;
    this.props.OnTextChange(this.value);
  }
  handleClick = event => {
    this.props.OnSendMessage(event);
  }

  render(){
    return <div className="TextEntryBoxContainer">
      <VerticalFlex>
        <textarea className="TextEntryBox" type="text"
                  value={this.state.value}
                  placeholder={this.props.placeholder}
                  ref={(e)=>{ this._textbox = e; }}
                  onChange={this.handleChange} />
        <input className="SendMessageButton" type="button" value="Send Message" onClick={this.handleClick} />
      </VerticalFlex>
    </div>
  }
}

export default TextEntryBox;
