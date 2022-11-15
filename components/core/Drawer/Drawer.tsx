import * as React from 'react';
import MUIDrawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '@Redux-store/index';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Button } from '@mui/material';

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const toggleMuiDrawer = (
  anchor: Anchor,
  open: boolean,
  dispatcher: Dispatch<AnyAction>
) => {
  dispatcher(toggleDrawer({ side: anchor, isOpen: open }));
};

const TemporaryDrawer = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const { Drawer } = useSelector((state: any) => state.rootState);
  const dispatch = useDispatch();

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <MUIDrawer
            anchor={anchor}
            open={Drawer[anchor]}
            onClose={() => toggleMuiDrawer(anchor, false, dispatch)}
          >
            {children}
          </MUIDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TemporaryDrawer;
