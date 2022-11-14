import { PayloadAction } from '@reduxjs/toolkit';
import { IinitialState, iActions, drawerToggleActionType } from './type';

export const reducers: iActions = {
  toggleMagnifiedLoader: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.magnifiedLoader = action.payload;
  },
  toggleBasicModal: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.BasicModal = action.payload;
  },
  toggleDrawer: (
    state: IinitialState,
    action: PayloadAction<drawerToggleActionType>
  ) => {
    state.Drawer[action.payload.side] = action.payload.isOpen;
  },
  setGeoLocation(state: IinitialState, action: PayloadAction<string>) {
    state.currentGeoLocation = action.payload;
  },
};
