import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Mask from './mask.jsx';
import './MessageTip.less';

const MessageTip = (props) => {
        const {isShow, sizeStyle, content, imgURL, confirmButton,confirmInfo} = props;
        return (
          <div style={{display:isShow?"block":"none"}}>
            <Mask/>
            <div className="container-fail">
                <div className="emoticon-img">
                    <img style={sizeStyle} src={imgURL}/>
                    <p className="emoticon-title">{content}</p>
                </div>
                <div className="emoticon-button" onClick={()=>confirmButton()}>{confirmInfo}</div>
            </div>
          </div>
            )

};
MessageTip.defaultProps = {
  isShow: true,
  sizeStyle:{width:"139px",height:"78px"},
  content: "没有信息！",
  imgURL: "./app/static/no-info@3x.png",
  confirmButton: ()=>{console.log(1)},
  confirmInfo: "确定"
};
MessageTip.PropTypes = {
  isShow: PropTypes.bool,
  sizeStyle:PropTypes.object,
  content: PropTypes.string,
  imgURL: PropTypes.string,
  confirmButton: PropTypes.func,
  confirmInfo: PropTypes.string
};
export default MessageTip;
