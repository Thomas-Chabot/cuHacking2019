import React, {Component} from "react";
import "./css/Message.css";

class Message extends Component {
  render(){
    return <div className={"row row-" + this.props.rowType}>
      <span className="message">
        {this.props.text}
      </span>
    </div>;
  }
}

export default Message;
