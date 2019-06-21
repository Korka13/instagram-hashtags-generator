import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ButtonCopy.css';

class ButtonCopy extends Component {
  constructor() {
    super();
    this.state = {
      isCopied: false,
      alert: '',
      popup: 'close'
    }
  }

  handlePopup(){
    this.setState({copied: true});
    setTimeout(() => {
      this.setState({copied: false})
    }, 2000);
  }

  render() {
    const {copyText, displayText} = this.props;
    return (
      <div className="ButtonCopy" >
            {this.state.copied ? <span className="ButtonCopy-popup">{this.state.alert}</span> : null}
                <CopyToClipboard 
                text={copyText}
                onCopy={(text, result) => {
                  const msg = result ? "Copied" : "It didn't work";
                  this.setState({alert: msg})
                  this.handlePopup()
                }}
                >
                
                 <button className="br-pill shadow-5 pa4 bg-light-gray">
                  {displayText}
                 </button>
                </CopyToClipboard>
      </div>
    )
  }
}

export default ButtonCopy;