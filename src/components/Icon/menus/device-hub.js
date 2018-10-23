import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconComposer from '../IconComposer';

let DeviceHub = (props) => {
  return (
    <SvgIcon {...props} >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SvgIcon>
  );
};

DeviceHub.defaultProps = {
  viewBox: '0 0 24 24'
};

export default IconComposer(DeviceHub);