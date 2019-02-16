import React, {Component} from "react";
import Message from "./Message.js";

import "./css/OldMessagesView.css";

class OldMessagesView extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

  addMessage(message){
    this.setState({
      messages: this.state.messages.concat({message})
    });
  }
  render(){
    let messages = this.state.messages.map((data)=><Message text={data.message} />);

    return <div id="OldMessagesView">
      {messages}
    </div>;
  }
}

export default OldMessagesView;
