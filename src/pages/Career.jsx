import React from "react";
import ImageWithTextText from "../common/ImageWithText";
import { Button, Typography } from "@mui/material";
import "../components/career/styleCareer.css"
export default function Career() {
  return (
    <div style={{paddingBottom:"3rem"}}>
      <ImageWithTextText
        text={"Career"}
        image={
          "https://scontent.fcbr1-1.fna.fbcdn.net/v/t39.30808-6/416353507_876804064447978_8677181074231484192_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OssGa0b2ZwEAX_rkKWY&_nc_ht=scontent.fcbr1-1.fna&oh=00_AfCvhS5XF9KehttqG9azUZt1oR3XXTXbhIm_gWhT0BCK4A&oe=660B8F43"
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
          <Button style={{backgroundColor:"#FEC994", padding:"0.4rem 3rem 0.4rem 3rem",borderRadius:"1rem",color:"black"}}>Send CV</Button>
        </div>
      </div>
    </div>
  );
}
