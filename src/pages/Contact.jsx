import { Typography } from "@mui/material";
import React from "react";
import GoogleMapReact from 'google-map-react';
import { Grid } from "@mui/material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default function Contact() {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return (
    <div>
      <Grid container style={{ padding: "1rem",  }}>
        <Grid item xs={12} sm={12} lg={3} md={3} style={{textAlign:"right"}}>
          {" "}
          <Typography variant="overline" style={{ fontSize: "3rem" ,textAlign:"right" }}>
            DV
          </Typography>{" "}
          
        </Grid>
        <Grid item xs={12} sm={12} lg={4.5} md={4.5} style={{paddingTop:"7rem"}}>
          <Typography variant="h6">Contact: 01xxxxxxx</Typography>
          <Typography variant="h6">Adress: It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
          <Typography variant="h6">Telephone: +800988998u978</Typography>
          <Typography variant="h6">Inquiry: hsdbj@gmail.com</Typography>

        </Grid>
        <Grid item xs={12} sm={12} lg={4.5} md={4.5}>
        <div style={{ height: '90vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

        </Grid>
      </Grid>
    </div>
  );
}
