import React, {Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './CopyAll.css';

class CopyAll extends Component {
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
    const {allHashtags} = this.props;
    return (
      <div className="CopyAll" >
            {this.state.copied ? <span className="CopyAll-popup">{this.state.alert}</span> : null}
                <CopyToClipboard 
                text={allHashtags}
                onCopy={(text, result) => {
                  const msg = result ? "Copied" : "It didn't work";
                  this.setState({alert: msg})
                  this.handlePopup()
                }}
                >
                
                 <button className="br-pill shadow-5 pa4 bg-light-gray">
                  Copy all!!
                 </button>
                </CopyToClipboard>
      </div>
    )
  }
}

export default CopyAll;