import React, {Component} from 'react';
import {render} from 'react-dom';
import FailTip from './component/fail.jsx';
import SuccessTip from './component/success.jsx';
import NoInfoTip from './component/noInfo.jsx';
import OffLineTip from './component/offLine.jsx';
class Test extends Component {
    constructor(props){
      super(props);
      this.state = {
        isShowFail:false,
        isShowSuccess:false,
        isShowNoInfo:false,
        isShowOffLine:false,
      }
      this.displayMessage = this.displayMessage.bind(this);
      this.failConfirm = this.failConfirm.bind(this);
    }
    displayMessage(judgeInfo) {
        switch (judgeInfo) {
            case 'success':
                this.setState({isShowSuccess:!this.state.isShowSuccess});
                break;
            case 'fail':
                this.setState({isShowFail:!this.state.isShowFail});
                break;
            case 'noInfo':
                this.setState({isShowNoInfo:!this.state.isShowNoInfo});
                break;
            case 'offLine':
                this.setState({isShowOffLine:!this.state.isShowOffLine});
                break;
        }

    }
    failConfirm (judgeInfo) {
        this.displayMessage(judgeInfo);
    }
    render() {

        return (
            <div className="container">
                <SuccessTip isShow = {this.state.isShowSuccess} failConfirm = {this.failConfirm.bind(this,'success')}/>
                <OffLineTip  isShow = {this.state.isShowOffLine} failConfirm = {this.failConfirm.bind(this,'offLine')}/>
                <FailTip isShow = {this.state.isShowFail} failConfirm = {this.failConfirm.bind(this,'fail')}/>
                <NoInfoTip isShow = {this.state.isShowNoInfo} failConfirm = {this.failConfirm.bind(this,'noInfo')}/>
                <button onClick = {this.displayMessage.bind(this,'success')}>操作成功</button>
                <button onClick = {this.displayMessage.bind(this,'fail')}>操作失败</button>
                <button onClick = {this.displayMessage.bind(this,'noInfo')}>没有信息</button>
                <button onClick = {this.displayMessage.bind(this,'offLine')}>没有信号</button>
            </div>
            )
    }
}

render(<Test/>,document.getElementById('app'));
