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
    this.setState((prevState)=>{
      return {
        messages: prevState.messages.concat({message})
      }
    });
  }

  render(){
    let messages = this.state.messages.map((data, index)=>
      <Message key={"message-" + index} text={data.message}
               rowType={index % 2 === 0 ? "dark" : "light"} />
    );

    return <div id="OldMessagesView">
      {messages}
    </div>;
  }
}

export default OldMessagesView;
