import React from "react";
import Grid from "@mui/material/Grid";
import image1 from "../common/images/1/1.jpg";
import image2 from "../common/images/2/1.jpg";
import image3 from "../common/images/3/1.jpg";
import image4 from "../common/images/4/1.jpg";
import image5 from "../common/images/5/1.jpg";
import image6 from "../common/images/6/1.jpg";
import image7 from "../common/images/7/1.jpeg";
import image8 from "../common/images/8/1.jpg";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  dispImage: {
    width: window.innerWidth > 700 ? "31vw" : "90vw",
    height: "40vh",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.4,
      // color: colors.buttonText,
    },
    "&:disabled": {
      // backgroundColor: colors.disabled,
    },
  },
  text: {
    color: "white",
    fontSize: "20px",
    position: "absolute",
    paddingTop: "50%",
    paddingLeft: "50%",
    // -webkit-transform: translate(-50%, -50%);
    // -ms-transform: translate(-50%, -50%);
    // transform: translate(-50%, -50%);
    textAlign: "center",
  },
}));

const Acoustic = () => {
  const classes = useStyles();
  let history = useNavigate();

  // <img src={images["0.png"]} />;
  // openFiles(getPath);

  //but if your goal is just to print the file name you can do this
  // fs.readFileSync(".levels/").forEach(console.log);

  //   // Our starting point
  //   try {
  //     // Get the files as an array
  //     const files = await fs.promises.readdir(getPath);

  //     // Loop them all with the new for...of
  //     for (const file of files) {
  //       // Get the full paths
  //       const getPath = path.join(getPath, file);
  //       // const toPath = path.join(moveTo, file);

  //       // Stat the file to see if we have a file or dir
  //       const stat = await fs.promises.stat(fromPath);

  //       if (stat.isFile()) console.log("'%s' is a file.", fromPath);
  //       else if (stat.isDirectory())
  //         console.log("'%s' is a directory.", fromPath);

  //       // Now move async
  //       await fs.promises.rename(fromPath, toPath);

  //       // Log because we're crazy
  //       console.log("Moved '%s'->'%s'", fromPath, toPath);
  //     } // End for...of
  //   } catch (e) {
  //     // Catch anything bad that happens
  //     console.error("We've thrown! Whoops!", e);
  //   }

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <h1>Acoustic Design</h1>
      <Grid
        container
        direction="row"
        spacing={1}
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.dispImage}
            src={image1}
            // title="Bangladesh College of Physicians and Surgeons"
            onClick={() => {
              history("?proj=1");
            }}
          ></img>
          <div className="overlay">
            <div className="text">Hello World</div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
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
          ></img>
        </Grid>
      </Grid>
    </div>
  );
};

export default Acoustic;
