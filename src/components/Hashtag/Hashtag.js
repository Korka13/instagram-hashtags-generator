import React, {Component} from 'react';
import Tilt from 'react-tilt';
import Delay from 'react-delay';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Hashtag.css';

class Hashtag extends Component {
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
    const {key, justifySelf, alignSelf, hashtag} = this.props;
    return (
      <div className="Hashtag" 
            style={{
              justifySelf, 
              alignSelf
            }}
            >
            {this.state.copied ? <span className="Hashtag-popup">{this.state.alert}</span> : null}
        <Tilt              
              options={{ max : 100 }} 
              className="Tilt br-pill"              
               >
               <Delay wait={Math.random()*4000}>
                <CopyToClipboard 
                text={hashtag}
                onCopy={(text, result) => {
                  const msg = result ? "Copied" : "It didn't work";
                  this.setState({alert: msg})
                  this.handlePopup()
                }}
                >
                
                 <button id={`button${key}`} className="br-pill shadow-5 pa4 bg-light-gray">
                  {hashtag}
                 </button>
                </CopyToClipboard>
               </Delay>
          </Tilt>
      </div>
    )
  }
}

export default Hashtag;