import React, {Component} from "react";
import "./css/TextEntryBox.css";

class TextEntryBox extends Component {
  handleChange = event => {
    this.props.OnTextChange(event);
  }

  render(){
    return <textarea className="TextEntryBox" type="text" placeholder={this.props.placeholder}
                     onChange={this.handleChange}></textarea>;
  }
}

export default TextEntryBox;
