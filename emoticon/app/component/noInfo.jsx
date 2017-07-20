import React, {Component} from 'react';
import Mask from './mask.jsx';
import './fail.less';
class NoInfo extends Component {
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
                    <img style={{width:"139px",height:"78px"}}src="./app/static/no-info@3x.png"/>
                    <p className="emoticon-title">没有信息！</p>
                </div>
                <div className="emoticon-button" onClick={()=>this.props.failConfirm()}>确认</div>
            </div>
          </div>
            )
    }
}
export default NoInfo;

