import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { IinitialState, IRootStateSlice } from './type';

const initialState: IinitialState = {
  Drawer: { left: false, right: false, top: false, bottom: false },
  magnifiedLoader: false,
  BasicModal: false,
  currentGeoLocation: '',
};

const RootStateSlice: IRootStateSlice = createSlice({
  name: 'rootState',
  initialState,
  reducers,
});

export const {
  toggleBasicModal,
  toggleMagnifiedLoader,
  toggleDrawer,
  setGeoLocation,
} = RootStateSlice.actions;

export default RootStateSlice.reducer;
