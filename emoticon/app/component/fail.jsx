import React, {Component} from 'react';
import Mask from './mask.jsx';
import './fail.less';

class FailTip extends Component {
   constructor(props) {
    super(props);
    this.state = {

    }
  }
    render() {
        return (
          <div style={{display:this.props.isShow?"block":"none"}}>
            <Mask/>
            <div className="container-fail">
                <div className="emoticon-img">
                    <img style={{width:"60px",height:"78px"}}src="./app/static/fail@2x.png"/>
                    <p className="emoticon-title">操作失败！</p>
                </div>
                <div className="emoticon-button" onClick={()=>this.props.failConfirm()}>确认</div>
            </div>
          </div>
            )
    }
}
export default FailTip;

