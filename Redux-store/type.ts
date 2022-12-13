import { PayloadAction, Slice } from '@reduxjs/toolkit';

export enum DrawerChild {
  'LOGIN',
  'SIGNUP',
}

export type iSideDrawer = {
  isOpen: boolean;
};

export type IinitialState = {
  SideDrawer: iSideDrawer;
  magnifiedLoader: boolean;
  currentGeoLocation: string;
  drawerAuth: DrawerChild;
  isLocationAvailable: boolean;
};

export type iActions = {
  toggleMagnifiedLoader: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ) => void;
  setGeoLocation: (state: IinitialState, action: PayloadAction<string>) => void;
  toggleDrawerInnerContent: (
    state: IinitialState,
    action: PayloadAction<DrawerChild>
  ) => void;
  toggleSideDrawer: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ) => void;
  toggleIsLocationAvailable: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ) => void;
};

export type IRootStateSlice = Slice<IinitialState, iActions, 'rootState'>;
