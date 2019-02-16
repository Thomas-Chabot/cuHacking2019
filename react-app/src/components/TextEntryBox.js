import React, {Component} from "react";
import "./css/TextEntryBox.css";

class TextEntryBox extends Component {
  get value() { return this._textbox.value; }

  handleChange = event => {
    this.props.OnTextChange(event);
  }
  handleClick = event => {
    this.props.OnSendMessage(event);
  }

  render(){
    return <div className="TextEntryBoxContainer">
      <textarea className="TextEntryBox" type="text"
                placeholder={this.props.placeholder}
                ref={(e)=>{ this._textbox = e; }}
                onChange={this.handleChange} />
      <input className="SendMessageButton" type="button" value="Send Message" onClick={this.handleClick} />
    </div>
  }
}

export default TextEntryBox;
