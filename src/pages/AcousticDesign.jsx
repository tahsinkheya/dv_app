import React, { useState } from "react";
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
import firestore from "../common/firebaseConf";
import Skeleton from "@mui/material/Skeleton";

import { useEffect } from "react";
const useStyles = makeStyles(() => ({
  readMore: {
    marginTop: "0px",
    "&:hover": {
      TextDecorator: "underline",
      color: "blue",
      cursor: "pointer",
    },
  },
  dispImage: {
    width: window.innerWidth > 700 ? "18vw" : "90vw",
    height: "23vh",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.4,
      // color: colors.buttonText,
    },
    "&:disabled": {
      // backgroundColor: colors.disabled,
    },
  },
  card: {
    "&:hover": {
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    },
    padding: window.innerWidth > 700 ? "0.2rem 1rem 0rem 1rem" : "0rem",
    boxShadow:
      window.innerWidth > 700
        ? "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        : "",
  },
  text: {
    color: "white",
    fontSize: "10px",
    position: "absolute",
    // paddingTop: "50%",
    paddingLeft: "50%",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

const Acoustic = () => {
  // const imageRef = firestore.collection("Acoustics");
  const [imageUrls, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState([]);
  const classes = useStyles();
  let history = useNavigate();
  useEffect(() => {
    setLoading(true);
    getImages();
  }, []);
  const getImages = async () => {
    let newList = [];
    let nameList = [];
    await firestore
      .collectionGroup("images")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          console.log(doc.data()[1]);
          newList.push(doc.data()[1]);
        });
        setLoading(false);
        setImages(newList);
      });
    setLoading(true);
    await firestore
      .collection("Acoustics")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          nameList.push(doc.data().name);
        });
        setLoading(false);
        setName(nameList);
      });
  };
  // let snapshot = await firebase.firestore()
  // .collection('route')
  // .doc('0bayKbCiAchc0Vy9XuxT')
  // .collection('qa')
  // .get()

  // snapshot.forEach(doc =>{
  //   console.log('hello', doc.data())
  // })
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          paddingLeft: "1rem",
          textAlign: "center",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Acoustic Design</h1>
        <img
          style={{ height: "5rem", display: isLoading ? "inline" : "none" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/loader%2F4ec18efab377896244ec49f7d42f70-unscreen.gif?alt=media&token=53491c34-276d-49d7-81ec-417121c74d30"
          }
        ></img>
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
          {imageUrls.map((value, key) => (
            <Grid item xs={12} sm={12} md={4}>
              <div className={classes.card}>
                {" "}
                <div
                  style={{
                    padding:
                      window.innerWidth > 700 ? "1rem 1rem 0rem 1rem" : "0rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className={classes.dispImage}
                    src={value}
                    // title="Bangladesh College of Physicians and Surgeons"
                    onClick={() => {
                      history("?proj=1");
                    }}
                  ></img>
                </div>
                <div className="overlay" style={{ paddingTop: "0.3rem" }}>
                  <div className="text">{name[key]}</div>
                </div>
                <p className={classes.readMore}> Read more</p>
              </div>
            </Grid>
          ))}
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
    </div>
  );
};

export default Acoustic;
