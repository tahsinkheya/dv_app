import React, { useState } from "react";
import { useEffect } from "react";
import firestore from "../../common/firebaseConf";
import { Swiper, SwiperSlide } from "swiper/react";
import Typography from "@mui/material/Typography";
import "../../common/display.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Grid } from "@mui/material";
import ProjSlider from "../../common/ProjSlider";
function AcousticMain() {
  let id = new URLSearchParams(window.location.search).get("proj");
  const [simProj, setSimProj] = useState([]);
  const [loading, setLoading] = useState([]);
  const [images, setImages] = useState([]);
  const [proj, setProj] = useState();
  console.log(proj);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let imgList = [];
    //get images, subtitle, title, locaiotn, market, size, client, deatailed title,detailed subtitle
    await firestore
      .collectionGroup("images")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs[0].data());
        querySnapshot.docs.forEach((doc) => {
          console.log(id);
          // console.log(doc)s
          console.log(doc.ref.parent.parent.id);
          if (id === doc.ref.parent.parent.id) {
            console.log(doc.data());
            imgList = Object.values(doc.data());
            // for (let i = 0; i < doc.data(); i++) {
            //   imgList.push(doc.data()[i]);
            //   console.log(doc.data()[i])
            // }
          }
        });
        setLoading(false);
        console.log(imgList);
        setImages(imgList);
      });
    await firestore
      .collection("Acoustics")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc.data());
        setProj(doc.data());
        setLoading(false);
        let simItem = [];
        firestore
          .collection("Acoustics")
          .get()
          .then((querySnapshot) => {
            querySnapshot.docs.forEach((newDoc) => {
              if (proj?.type === newDoc.data().type) {
                simItem.push(newDoc.data());
              }
            });
          });
        setSimProj(simItem);
      });
  };

  return <ProjSlider images={images} proj={proj} />;
}

export default AcousticMain;
