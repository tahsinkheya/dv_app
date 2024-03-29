import React from 'react';
import { Grid, Typography } from '@mui/material';

const ImageWithTextText = ({text, image}) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ position: 'relative' }}>
        <img src={image} alt="My Image" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px' }}>
          <Typography variant={window.innerWidth>700?"h2":"h6"}>{text}</Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default ImageWithTextText;
