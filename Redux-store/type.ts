import { PayloadAction, Slice } from '@reduxjs/toolkit';

export enum DrawerChild {
  'LOGIN',
  'SIGNUP',
}

export type iDrawer = {
  top: boolean;
  bottom: boolean;
  left: boolean;
  right: boolean;
};

export type IinitialState = {
  Drawer: iDrawer;
  magnifiedLoader: boolean;
  BasicModal: boolean;
  currentGeoLocation: string;
  drawerAuth: DrawerChild;
};

export type drawerToggleActionType = {
  side: 'top' | 'bottom' | 'left' | 'right';
  isOpen: boolean;
};

export type iActions = {
  toggleMagnifiedLoader: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ) => void;
  toggleBasicModal: (
    state: IinitialState,
    action: PayloadAction<boolean>
  ) => void;
  toggleDrawer: (
    state: IinitialState,
    action: PayloadAction<drawerToggleActionType>
  ) => void;
  setGeoLocation: (state: IinitialState, action: PayloadAction<string>) => void;
  toggleDrawerInnerContent: (
    state: IinitialState,
    action: PayloadAction<DrawerChild>
  ) => void;
};

export type IRootStateSlice = Slice<IinitialState, iActions, 'rootState'>;
