import React from "react";
import { useState } from "react";
import ImageWithTextText from "../common/ImageWithText";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Divider, Grid, Typography, Button } from "@mui/material";
import "../common/styles/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
export default function Home() {
  const [isHoveredArc, setIsHoveredArc] = useState(false);
  const [isHoveredInt, setIsHoveredInt] = useState(false);
  const [isHoveredAcc, setIsHoveredAcc] = useState(false);
  return (
    <div>
      {" "}
      <ImageWithTextText
        image={
          "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/A3%2F1.jpg?alt=media&token=be01086c-7c55-447f-95cd-ce464939bed0"
        }
        text={"Featured Work"}
      />{" "}
      <div className="container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          style={{ padding: "4rem 0rem 4rem 0rem", backgroundColor: "#F2F3F4" }}
        >
          <Grid item xs={false} sm={false} md={1} lg={1}></Grid>

          <Grid item xs={12} sm={12} md={2.67} lg={2.67}>
            <div
              className="image-container"
              onMouseEnter={() => setIsHoveredArc(true)}
              onMouseLeave={() => setIsHoveredArc(false)}
            >
              <img
                style={{ width: "100%", opacity: isHoveredArc ? 0.8 : 1 }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/A5%2FGCCN.jpg?alt=media&token=2c4a24e0-b5bc-42ee-b1bf-79b3e0926028"
                }
              ></img>
              {isHoveredArc && (
                <div className="text-animation">
                  Architectural Designs
                  <Divider style={{ backgroundColor: "white" }} />
                </div>
              )}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={2.67} lg={2.67}>
            <div
              className="image-container"
              onMouseEnter={() => setIsHoveredInt(true)}
              onMouseLeave={() => setIsHoveredInt(false)}
            >
              <img
                style={{ width: "100%", opacity: isHoveredInt ? 0.8 : 1 }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/R12%2FWELL%20FOOD.jpg?alt=media&token=94c820cd-1764-4ff2-9d37-16074fb23e65"
                }
              />
              {isHoveredInt && (
                <div className="text-animation">
                  Interior Designs
                  <Divider style={{ backgroundColor: "white" }} />
                </div>
              )}
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={2.67} lg={2.67}>
            <div
              className="image-container"
              onMouseEnter={() => setIsHoveredAcc(true)}
              onMouseLeave={() => setIsHoveredAcc(false)}
            >
              <img
                style={{ width: "100%", opacity: isHoveredAcc ? 0.8 : 1 }}
                src={
                  "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/R12%2FWELL%20FOOD.jpg?alt=media&token=94c820cd-1764-4ff2-9d37-16074fb23e65"
                }
              />
              {isHoveredAcc && (
                <div className="text-animation">
                  Acoustic Solutions
                  <Divider style={{ backgroundColor: "white" }} />
                </div>
              )}
            </div>
          </Grid>

          <Grid item xs={false} sm={false} md={1} lg={1}></Grid>

          {/* <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image2}
            title="BG Home Theatre"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image3}
            title="CMH Chittagong"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image4}
            title="Darbar Hall"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image5}
            title="Grameen Caledonian College of Nursing"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image6}
            title="KochiKacha"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image7}
            title="National Security Intelligence"
          ></img>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image8}
            title="University Of Science & Technology Chattogram"
          ></img> */}
          {/* </Grid> */}
        </Grid>
      </div>
      <Divider
        style={{
          margin: "0rem 10rem 0rem 10rem",
          display: window.innerWidth < 700 ? "none" : "block",
        }}
      ></Divider>
      <div style={{ paddingTop: "4rem" }}>
        {" "}
        <Grid
          container
          direction={window.innerWidth > 700 ? "row" : "column"}
          justifyContent="center"
          alignItems="stretch"
          style={{ paddingTop: "1rem" }}
        >
          <Grid item xs={false} sm={false} lg={1} md={1}></Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5.5}
            md={5.5}
            xl={5.5}
            style={{ padding: "1rem", textAlign: "center" }}
          >
            <div>
              {" "}
              <Typography
                variant="overline"
                align="left"
                style={{
                  fontSize: window.innerWidth > 700 ? "0.8rem" : "0.5rem",
                  textAlign: "left",
                  display: "flex",
                  color: "blue",
                }}
              >
                {" "}
                Project In Brief
              </Typography>
            </div>
            <Typography
              style={{
                fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
              }}
            >
              MK Residence
            </Typography>

            <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
              Our architectural services begin with an analysis of client’s
              needs and objectives, and result in the creation of a project that
              meets the intended functional,economical and aesthetical
              requirements. Our team develops Design concepts; translates them
              into conventional working drawings and specifications; then ready
              for construction. We can also assist clients in the bidding
              process and construction management to meet quality, time and
              cost.
            </Typography>
            <Grid container style={{ paddingTop: "3rem" }} spacing={1}>
              {" "}
              <Grid item xs={4} sm={4} lg={3} md={3} xl={3}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    padding: "0.4rem 2rem 0.4rem 2rem",
                    borderRadius: "0rem",
                    color: "black",
                  }}
                >
                  See More
                </Button>
              </Grid>
              {/* <Grid item xs={4} sm={4} lg={0.} md={1} xl={1}></Grid> */}
              <Grid item xs={4} sm={4} lg={3} md={3} xl={3}>
                <Button
                  style={{
                    backgroundColor: "#FEC994",
                    padding: "0.4rem 2rem 0.4rem 2rem",
                    borderRadius: "0rem",
                    color: "black",
                  }}
                >
                  See Work
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5.5}
            md={5.5}
            xl={5.5}
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: window.innerWidth > 700 ? "20vw" : "80vw",
              }}
              src={
                "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/R12%2FWELL%20FOOD.jpg?alt=media&token=94c820cd-1764-4ff2-9d37-16074fb23e65"
              }
            ></img>
          </Grid>
          <Grid item xs={false} sm={false} lg={1} md={1}></Grid>
        </Grid>
        <Divider
          style={{
            margin: "0rem 10rem 0rem 10rem",
            display: window.innerWidth < 700 ? "none" : "block",
          }}
        ></Divider>
        <Grid
          container
          direction={window.innerWidth > 700 ? "row" : "column-reverse"}
          justifyContent="center"
          alignItems="stretch"
          style={{ paddingTop: "1rem", backgroundColor: "#F2F3F4" }}
        >
          {/* <Grid item xs={false} sm={false} lg={1} md={1}></Grid> */}
          <Grid
            item
            xs={12}
            sm={12}
            lg={5.5}
            md={5.5}
            xl={5.5}
            style={{ padding: "1rem", textAlign: "center" }}
          >
            <img
              style={{
                width: window.innerWidth > 700 ? "20vw" : "80vw",
              }}
              src={
                "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/R12%2FWELL%20FOOD.jpg?alt=media&token=94c820cd-1764-4ff2-9d37-16074fb23e65"
              }
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5.5}
            md={5.5}
            xl={5.5}
            style={{ padding: "1rem", textAlign: "center" }}
          >
            <div>
              {" "}
              <Typography
                variant="overline"
                align="left"
                style={{
                  fontSize: window.innerWidth > 700 ? "0.8rem" : "0.5rem",
                  textAlign: "left",
                  display: "flex",
                  color: "blue",
                }}
              >
                {" "}
                Work with us
              </Typography>
            </div>
            <Typography
              style={{
                fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
              }}
            >
              Our commitment to diversity
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
              Design & Supervision of Residential, Commercial, Clinics,
              Corporate Offices, Retails, Showrooms, Restaurants, Exhibition
              Spaces etc. Our effort has been not to treat interior design as
              embellishment or decoration, it is actually much more. We design
              interiors with the same care and understandingof representation as
              building design itself. Our services in this area are particular
              and specialized.
            </Typography>
            <Grid container style={{ paddingTop: "3rem" }} spacing={1}>
              {" "}
              <Grid item xs={4} sm={4} lg={3} md={3} xl={3}>
                {" "}
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    padding: "0.4rem 2rem 0.4rem 2rem",
                    borderRadius: "0rem",
                    color: "black",
                  }}
                >
                  See More
                </Button>
              </Grid>
              {/* <Grid item xs={4} sm={4} lg={0.} md={1} xl={1}></Grid> */}
              <Grid item xs={4} sm={4} lg={3} md={3} xl={3}>
                <Button
                  style={{
                    backgroundColor: "#FEC994",
                    padding: "0.4rem 2rem 0.4rem 2rem",
                    borderRadius: "0rem",
                    color: "black",
                  }}
                >
                  See Work
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={false} sm={false} lg={1} md={1}></Grid>
        </Grid>
      </div>
    </div>
  );
}
