import React, { useRef, useState } from "react";
import Card from "../layout/Card";
import profilePhoto from "../assests/profile_uploader.png";
import { useForm } from "react-hook-form";
import plusIcon from "../assests/add_icon.png";
import Footer from "../layout/Footer";

const ProfilePage = () => {
  const [interest, setInterest] = useState({
    interest1: "",
    interest2: "",
    interest3: "",
  });
  const [additionalText, setAdditionalText] = useState(null)
  const [inEditmode, setInEditmode] = useState(true);
  const {
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    setInterest((interest.interest1 = data.interest1));
    setInterest((interest.interest2 = data.interest2));
    setInterest((interest.interest3 = data.interest3));
    console.log(data)
  };
  const editModeHandler = (e) => {
    e.preventDefault();
    setInEditmode(!inEditmode)
  }
  const editApplyHandler = (e) => {
    e.preventDefault();
    setInEditmode(!inEditmode)
    setAdditionalText('')
  }
  const addAdditionalTextHandler = (e) => {
    e.preventDefault();
    setAdditionalText(<input className="text-center px-1 focus:outline-none w-40 rounded-xl border-2 shadow-lg border-slate-200" type="text"/>)
  }
  const imageUploader = useRef();
  return (
    <Card bgColor="relative bg-slate-300 text-black space-y-6">
      {!inEditmode && <h3 className="text-4xl font-bold mt-[20%]">Edit Mode</h3>}
      {inEditmode && <h3 className="text-4xl font-bold mt-[20%]">My Profile</h3>}
      <div className="flex justify-around">
        <div className="flex items-center">
          <div className="text-2xl font-semibold">
            <p>John Doe</p>
            <p>He/Him, 25</p>
          </div>
        </div>
        <div
          onClick={() => {
            imageUploader.current.click();
          }}
          className="border-2 w-32 h-32 rounded-full flex justify-center items-center"
        >
          <input
            ref={imageUploader}
            className="hidden"
            type="file"
            accept="image/*"
            multiple={false}
          />
          <img className="w-20 h-20" src={profilePhoto} alt="profile" />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="mb-2">
          <label className="flex justify-start text-xl font-semibold mb-2">
            Interests
          </label>
          <div className="flex justify-around">
            <input
              type="text"
              className="text-center px-1 focus:outline-none shadow-lg w-28 rounded-xl border-2 border-slate-200"
              {...register("interest1")}
              defaultValue="Video Games"
              readOnly={inEditmode}
            />
            <input
            readOnly={inEditmode}
            defaultValue="Cars"
              type="text"
              className="text-center px-1 focus:outline-none w-32 shadow-lg rounded-xl border-2 border-slate-200"
              {...register("interest2")}
            />
            <input
            readOnly={inEditmode}
            defaultValue="Outdoor"
              type="text"
              className="text-center focus:outline-none px-1 w-28 rounded-xl shadow-lg border-2 border-slate-200"
              {...register("interest3")}
            />
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="flex flex-col">
            <label className="flex justify-start text-xl font-semibold mb-2">
              Occupation
            </label>
            <input
            defaultValue="Frontend Dev"
            readOnly={inEditmode}
              className="text-center px-1 focus:outline-none w-40 rounded-xl border-2 shadow-lg border-slate-200"
              type="text"
            />
          </div>
          <div>
            <label className="flex justify-end text-xl font-semibold mb-2">
              Education
            </label>
            <input
            defaultValue="Harvard"
            readOnly={inEditmode}
              className="text-center  px-1 focus:outline-none w-40 rounded-xl border-2 shadow-lg border-slate-200"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="flex justify-start text-xl font-semibold mb-2">Ask Me About</label>
          <textarea defaultValue="How do I spend my free time?" readOnly={inEditmode} className="resize-none p-1 focus:outline-none rounded-lg shadow-lg h-32" type="text"/>
        </div>
        {additionalText}
        {!inEditmode && !additionalText && <div className="flex justify-center">
          <img  onClick={addAdditionalTextHandler} src={plusIcon} alt="plus"/>
        </div>}
        <div className="absolute inset-x-0 bottom-[10%]">
          {inEditmode && <button onClick={editModeHandler} className="hover:bg-orange-400 px-16 py-1 rounded-lg bg-green-400 text-lg font-medium text-white border-2">Edit</button>}
          {!inEditmode && <button onClick={editApplyHandler} className="hover:bg-orange-400 px-16 py-1 rounded-lg bg-green-400 text-lg font-medium text-white border-2">Apply</button>}
        </div>
      </form>
     <Footer/>
    </Card>
  );
};

export default ProfilePage;
