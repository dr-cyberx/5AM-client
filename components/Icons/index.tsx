import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Warning } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const closeIcon = (): JSX.Element => <CloseIcon fontSize="medium" />;
const warningIcon = (): JSX.Element => <Warning />;
const arrowForwardIcon = (): JSX.Element => <ArrowForwardIcon />;

export { closeIcon, warningIcon, arrowForwardIcon };
