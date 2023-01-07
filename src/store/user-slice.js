import { createSlice, configureStore } from "@reduxjs/toolkit";

//setup redux for user Info manageent --> gender?    

const initialState = {
  firstName,
  lastName,
  email,
  userAge,
  gender,
  interests,
  occupation,
  education,
  askMeAbout,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setInterest: (state, action) => {
      state.interests = action.payload;
    },
    setOccupation: (state, action) => {
      state.occupation = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setAskMeAbout: (state, action) => {
      state.askMeAbout = action.payload;
    },
  },
});

export const store = configureStore({
    reducer: {user: userSlice}
  });


export const userActions = userSlice.actions;
export default userSlice.reducer;
