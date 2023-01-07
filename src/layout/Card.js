import React from "react";

const Card = (props) => {
  return (
    <div className="grid  h-screen place-items-center w-screen font-mono bg-slate-500">
      <div className={`${props.bgColor} flex-row text-center text-white p-4 justify-center w-[390px] h-[844px]`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
