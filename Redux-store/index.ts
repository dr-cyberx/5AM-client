import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { DrawerChild, IinitialState, IRootStateSlice } from './type';

const initialState: IinitialState = {
  SideDrawer: { isOpen: false },
  drawerAuth: DrawerChild.SIGNUP,
  magnifiedLoader: false,
  currentGeoLocation: '',
};

const RootStateSlice: IRootStateSlice = createSlice({
  name: 'rootState',
  initialState,
  reducers,
});

export const {
  toggleSideDrawer,
  toggleMagnifiedLoader,
  setGeoLocation,
  toggleDrawerInnerContent,
} = RootStateSlice.actions;

export default RootStateSlice.reducer;
