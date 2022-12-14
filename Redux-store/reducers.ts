import { PayloadAction } from '@reduxjs/toolkit';
import { IinitialState, iActions, DrawerChild } from './type';

export const reducers: iActions = {
  toggleMagnifiedLoader: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.magnifiedLoader = action.payload;
  },
  toggleGlobalLoader: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.globalLoader = action.payload;
  },
  setGeoLocation(state: IinitialState, action: PayloadAction<string>) {
    state.currentGeoLocation = action.payload;
  },
  toggleDrawerInnerContent(
    state: IinitialState,
    action: PayloadAction<DrawerChild>
  ) {
    state.drawerAuth = action.payload;
  },
  toggleSideDrawer: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.SideDrawer.isOpen = action.payload;
  },
  toggleIsLocationAvailable: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isLocationAvailable = action.payload;
  },
};
