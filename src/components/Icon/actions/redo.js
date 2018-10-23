import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconComposer from '../IconComposer';

let Redo = (props) => {
  return (
    <SvgIcon {...props} >
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
    </SvgIcon>
  );
};

Redo.defaultProps = {
  viewBox: '0 0 24 24'
};

export default IconComposer(Redo);