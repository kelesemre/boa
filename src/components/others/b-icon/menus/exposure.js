import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import BIconComposer from '../BIconComposer';

let Exposure = (props) => {
  return (
    <SvgIcon {...props} >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z" />
    </SvgIcon>
  );
};

Exposure.defaultProps = {
  viewBox: '0 0 24 24'
};

export default BIconComposer(Exposure);