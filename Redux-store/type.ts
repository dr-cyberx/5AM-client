import { Slice } from '@reduxjs/toolkit';

export type IMagnifyLoader = {
  hiderMagnifiedLoader: (state: IinitialState) => void;
  showMagnifiedLoader: (state: IinitialState) => void;
};

export type IinitialState = {
  isLoginModalOpen: boolean;
  isSignUpModalOpen: boolean;
  magnifiedLoader: boolean;
};

export type IRootStateSlice = Slice<
  IinitialState,
  {
    hiderMagnifiedLoader: (state: IinitialState) => void;
    showMagnifiedLoader: (state: IinitialState) => void;
  },
  'rootState'
>;
