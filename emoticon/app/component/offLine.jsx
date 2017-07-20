import React, {Component} from 'react';
import Mask from './mask.jsx';
import './fail.less';
class OffLineTip extends Component {
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
                    <img  style={{width:"99px",height:"80px"}} src="./app/static/offLine@3x.png"/>
                    <p className="emoticon-title">网络已离家出走！</p>
                </div>
                <div className="emoticon-button" onClick={()=>this.props.failConfirm()}>确认</div>
            </div>
          </div>
            )
    }
}
export default OffLineTip;

