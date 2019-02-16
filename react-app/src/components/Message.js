import React, {Component} from "react";
import "./css/Message.css";

class Message extends Component {
  render(){
    return <div className={"row row-" + this.props.rowType}>
      <div className="message">
        {this.props.text}
      </div>
    </div>;
  }
}

export default Message;
