import React from "react";
import ImageWithTextText from "../common/ImageWithText";
import { Button, Typography } from "@mui/material";
import "../components/career/styleCareer.css";
export default function Career() {
  return (
    <div style={{ paddingBottom: "3rem" }}>
      <ImageWithTextText
        text={"Career"}
        image={
          "https://cdn.shopify.com/s/files/1/1619/4221/files/1_Photo_by_Omar_Lopez_on_Unsplash.jpg?v=1655447031"
        }
      ></ImageWithTextText>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <div style={{ maxWidth: "1200px", textAlign: "center" }}>
          <Typography variant="subtitle1">
            Lorem Ipsum passages, and more recently with nd more recently with
            desktop publisnd more recently with desktop publisnd more recently
            with desktop publisdesktop publisnd more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum
          </Typography>
          <Typography variant="h4">Join Us</Typography>
          {/* <button className="button-15" role="button">Button 15</button> */}
          <Button
            style={{
              backgroundColor: "#FEC994",
              padding: "0.4rem 3rem 0.4rem 3rem",
              borderRadius: "1rem",
              color: "black",
            }}
          >
            Send CV
          </Button>
        </div>
      </div>
    </div>
  );
}
