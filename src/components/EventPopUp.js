import React from "react";
import Modal from "../layout/Modal";
import backIcon from "../assests/back_icon.png";

const EventPopUp = (props) => {
  return (
    <Modal tailWind="p-4 font-medium">
      <div onClick={props.onClick}>
        <img src={backIcon} alt="back" />
      </div>
      <div className="">
        <div className="text-right" >
          <h4 className={`${props.eventStatusColor}`}>{props.eventStatus}</h4>
          <h4>{props.eventTime}</h4>
        </div>
        <div className="flex justify-between mb-2">
          <h4 className="text-blue-200">{props.eventMilage}</h4>
          <h4 className="text-blue-200">{props.eventAttendence}</h4>
        </div>
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">{props.eventTitle}</h3>
          <img className="rounded-lg" src={props.eventPhoto} alt="event" />
          <span className="text-xs text-slate-400">{props.eventAddress}</span>
          <p className="font-medium">{props.eventDescription}</p>
        </div>
        <div className="mt-[60px] text-center">
        <button className={`text-xl font-bold border-2 px-16 rounded-lg text-white ${props.eventActionColor} py-2`}>{props.eventAction}</button>
        </div>
      </div>
    </Modal>
  );
};

export default EventPopUp;
