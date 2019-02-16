import React, { Component } from 'react';
import './App.css';
import Container from "./components/Container.js";
import WarningsView from "./components/WarningsView.js"
import TextEntryBox from "./components/TextEntryBox.js";
import OldMessagesView from "./components/OldMessagesView.js";

class App extends Component {
  handleTextChange = value => {
    console.log(value);
  }
  handleSendMessage = event => {
    let text = this._textbox.value;
    
    this._textbox.clear();
    this._olderMessages.addMessage(text);
  }

  componentDidMount(){
    this._olderMessages.addMessage("TestNG 1");
    this._olderMessages.addMessage("TestNG 2");
  }

  render() {
    return (
      <div className="App">
        <Container>
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>*/}
          <WarningsView />
          <OldMessagesView ref={(e)=>{ this._olderMessages=e; }} />
          <TextEntryBox placeholder="test" ref={(e)=>{ this._textbox=e; }}
            OnTextChange={this.handleTextChange}
            OnSendMessage={this.handleSendMessage} />
        </Container>
      </div>
    );
  }
}

export default App;
