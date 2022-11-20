import * as React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideDrawer } from '@Redux-store/index';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Button } from '@mui/material';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const toggleMuiDrawer = (
  open: boolean,
  dispatcher: Dispatch<AnyAction>
) => {
  dispatcher(toggleSideDrawer(open));
};

const TemporaryDrawer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { SideDrawer } = useSelector((state: any) => state.rootState);
  const dispatch = useDispatch();

  return (
    <div>
      {(['right'] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <MUIDrawer
            anchor={anchor}
            open={SideDrawer['isOpen']}
            onClose={() => toggleMuiDrawer(false, dispatch)}
          >
            {children}
          </MUIDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
