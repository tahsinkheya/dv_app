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
import { useEffect } from "react";
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
  console.log(imageUrls);
  // let snapshot = await firebase.firestore()
  // .collection('route')
  // .doc('0bayKbCiAchc0Vy9XuxT')
  // .collection('qa')
  // .get()

  // snapshot.forEach(doc =>{
  //   console.log('hello', doc.data())
  // })
  return (
    <div style={{ paddingLeft: "1rem", textAlign: "center" }}>
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
            <img
              className={classes.dispImage}
              src={value}
              // title="Bangladesh College of Physicians and Surgeons"
              onClick={() => {
                history("?proj=1");
              }}
            ></img>
            <div className="overlay">
              <div className="text">{name[key]}</div>
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
  );
};

export default Acoustic;
