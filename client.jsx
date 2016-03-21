/*
 * A container for text that gets copied when clicked
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class _CopyText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const text = this.props.text;
    const style = {
      container: {
        color: 'black',
        cursor: 'text',
        display: 'inline-block',
      },
      textarea: {
        padding: '5px 10px',
        backgroundColor: 'white',
        borderStyle: 'none',
        resize: 'none',
        borderColor: 'Transparent',
        overflow: 'auto',
        height: '30px',
      }
    };
    return <div onClick={this.copy.bind(this)} style={style.container}>
      <textarea wrap="off" cols="30" rows="1" value={text} style={style.textarea} ref="input" onChange={() => {}}></textarea>
    </div>
  }
  copy() {
    if (this.state.hasClickedOnce) {
      return;
    }
    const {text, onCopied} = this.props;
    const target = ReactDOM.findDOMNode(this.refs.input);
    target.focus();
    target.setSelectionRange(0, text.length);

    // copy the selection
    var succeed;
    try {
      succeed = document.execCommand("copy");
    } catch(e) {
      succeed = false;
    }
    if (!succeed) {
      onCopied && onCopied(false);
    } else {
      onCopied && onCopied(true, text);
    }
    target.setSelectionRange(0, text.length);
    this.setState({hasClickedOnce: true});
  }
}
CopyText = _CopyText;
