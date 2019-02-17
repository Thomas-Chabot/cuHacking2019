import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container.js";
import ContentWindow from "./components/ContentWindow.js";
import WarningsView from "./components/WarningsView.js"
import TextEntryBox from "./components/TextEntryBox.js";
import OldMessagesView from "./components/OldMessagesView.js";

//import Request from "./lib/Request.js";

let url = "localhost";
//let request = new Request(url);

class App extends Component {
  handleTextChange = value => {

  }
  handleSendMessage = value => {
    this._textbox.clear();
    let id = this._olderMessages.addMessage(value);

    //request.postData(value).then((result)=>{
    let result = {[value]: 1};
    this._olderMessages.attachData(id, result);

    this._updateData(result);
    //});
  }
  onMessageClick = data => {
    this._updateData(data);
  }


  _updateData(result){
    this._warnings.reset();

    for (let key in result){
      this._warnings.addDataPoint(key, result[key]);
    }
  }

  render() {
    return (
      <div className="App">
        <Container>
          <TextEntryBox placeholder="test" ref={(e)=>{ this._textbox=e; }}
            OnTextChange={this.handleTextChange}
            OnSendMessage={this.handleSendMessage} />

          <ContentWindow>
            <OldMessagesView ref={(e)=>{ this._olderMessages=e; }}
                             onClick={this.onMessageClick} />
            <WarningsView ref={(e)=>{ this._warnings=e; }} />
          </ContentWindow>
        </Container>
      </div>
    );
  }
}

export default App;
