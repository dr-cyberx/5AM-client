import { IMagnifyLoader } from './type';

export const MagnifiedLoaderReducers: IMagnifyLoader = {
  hiderMagnifiedLoader: (state: any) => {
    state.magnifiedLoader = false;
  },
  showMagnifiedLoader: (state: any) => {
    state.magnifiedLoader = true;
  },
};
