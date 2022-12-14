import { createSlice } from '@reduxjs/toolkit';
import { reducers } from './reducers';
import { DrawerChild, IinitialState, IRootStateSlice } from './type';

const initialState: IinitialState = {
  SideDrawer: { isOpen: false },
  drawerAuth: DrawerChild.SIGNUP,
  magnifiedLoader: false,
  currentGeoLocation: '',
  isLocationAvailable: false,
  globalLoader: false,
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
  toggleIsLocationAvailable,
  toggleGlobalLoader,
} = RootStateSlice.actions;

export default RootStateSlice.reducer;
