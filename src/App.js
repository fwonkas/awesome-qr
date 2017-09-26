import React, { Component } from 'react';
import QRCode from 'qrcode-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.change = this.change.bind(this);
    this.download = this.download.bind(this);
  }
  change(text) {
    this.setState({
      text: this.input.value
    })
  }
  download(e) {
    this.downloadEl.download = "qr-code.png";
    this.downloadEl.href = this.canvas.refs.canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  }
  render() {
    return (
      <div className="App">
        <p className="QRCode">
          <QRCode size="512" value={this.state.text} ref={el => this.canvas = el}/>
        </p>
        <p>
          <input type="text" placeholder="Type message here" ref={el => this.input = el} onChange={this.change} value={this.state.text}/>
        </p>
        <p>
          <a href="" ref={el => this.downloadEl = el} onClick={this.download}>Download</a>
        </p>
      </div>
    );
  }
}

export default App;
