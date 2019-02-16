import React, {Component} from "react";
import "./css/Message.css";

class Message extends Component {
  render(){
    let content = this.props.text.split("\n").map((text)=>{
      return <div className="message">{text}</div>;
    });
    return <div className={"row row-" + this.props.rowType}>
      {content}
    </div>;
  }
}

export default Message;
