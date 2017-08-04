import React, {Component} from 'react';
import {render} from 'react-dom';
import MessageTip from './component/messageTip.jsx';

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
      this.confirm = this.confirm.bind(this);
    }
    displayMessage(judgeInfo) {
        console.log(this.refs.b);
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
    confirm (judgeInfo) {
        console.log(judgeInfo);
        this.displayMessage(judgeInfo);
    }
    render() {

        return (
            <div className="container">
                <MessageTip isShow={this.state.isShowSuccess}
                            sizeStyle={{width:"101px",height:"78px"}}
                            content={"操作成功！"}
                            imgURL={'./app/static/smile@3x.png'}
                            confirmButton={this.confirm.bind(this,'success')}
                            confirmInfo={"确定"}>
                </MessageTip>

                <MessageTip isShow={this.state.isShowFail}
                            sizeStyle={{width:"60px",height:"78px"}}
                            content={"操作失败！"}
                            imgURL={'./app/static/fail@2x.png'}
                            confirmButton={this.confirm.bind(this,"fail")}
                            confirmInfo={"确定"}>
                            </MessageTip>
                <MessageTip   isShow={this.state.isShowNoInfo}  confirmButton={this.confirm.bind(this,"noInfo")}/>

                <MessageTip isShow={this.state.isShowOffLine}
                            sizeStyle={{width:"99px",height:"80px"}}
                            content={"没有信号"}
                            imgURL={'./app/static/offLine@3x.png'}
                            confirmButton={this.confirm.bind(this, "offLine")}
                            confirmInfo={"确定"}>
                </MessageTip>

                <button onClick = {this.displayMessage.bind(this,'success')}>操作成功</button>
                <button onClick = {this.displayMessage.bind(this,'fail')}>操作失败</button>
                <button onClick = {this.displayMessage.bind(this,'noInfo')}>没有信息</button>
                <button onClick = {this.displayMessage.bind(this,'offLine')}>没有信号</button>
            </div>
            )
    }
}

render(<Test/>,document.getElementById('app'));
