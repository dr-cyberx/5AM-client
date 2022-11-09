import { createSlice, configureStore } from '@reduxjs/toolkit';
import { MagnifiedLoaderReducers } from './reducers';
import { IinitialState, IRootStateSlice } from './type';

const initialState: IinitialState = {
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  magnifiedLoader: false,
};

const RootStateSlice: IRootStateSlice = createSlice({
  name: 'rootState',
  initialState,
  reducers: {
    ...MagnifiedLoaderReducers,
  },
});

export const { hiderMagnifiedLoader, showMagnifiedLoader } =
  RootStateSlice.actions;
export default RootStateSlice.reducer;
