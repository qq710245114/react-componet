import React, {Component} from 'react';
import {render} from 'react-dom';

import MessageTip from './component/messageTip.jsx';
class Test extends Component {
    constructor(props){
      super(props);
      this.state = {
        isShowNoInfo:false,

      }
      this.displayMessage = this.displayMessage.bind(this);

    }
    displayMessage(judgeInfo) {
                this.setState({isShowNoInfo:!this.state.isShowNoInfo});
    }

    render() {

        return (
            <div className="container">
                <MessageTip isShow={this.state.isShowNoInfo} confirmButton={this.displayMessage}/>
                <button onClick = {this.displayMessage}>没有信息</button>
            </div>
            )
    }
}

render(<Test/>,document.getElementById('app'));
