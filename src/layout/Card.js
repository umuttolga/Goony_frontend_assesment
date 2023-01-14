import React from "react";

// make responsive 

const Card = (props) => {
  return (
    <div className="grid  h-screen place-items-center w-screen font-mono bg-slate-500">
      <div className={`${props.bgColor}  flex-row text-center text-white p-4 justify-center max-sm:h-screen max-sm:w-screen sm:w-screen sm:h-screen md:max-w-[390px] md:max-h-[844px]`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
