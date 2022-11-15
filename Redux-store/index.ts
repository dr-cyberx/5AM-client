import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { DrawerChild, IinitialState, IRootStateSlice } from './type';

const initialState: IinitialState = {
  Drawer: { left: false, right: false, top: false, bottom: false },
  drawerAuth: DrawerChild.SIGNUP,
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
  toggleDrawerInnerContent,
} = RootStateSlice.actions;

export default RootStateSlice.reducer;
