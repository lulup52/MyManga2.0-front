import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    popUpState: state.popUpState,
    popUpMsg: state.popUpMsg
});

const NorifPopUp = ({popUpState,popUpMsg}) => {
  return (
    <div className={`popUpNotifContainner ${popUpState? "visible" : "" }`}>
        <div className='popUpNotif'>
            {popUpMsg}
        </div>
    </div>
  );
}
export default connect(mapStateToProps)(NorifPopUp)


