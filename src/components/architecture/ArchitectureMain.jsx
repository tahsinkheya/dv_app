import React, { useState } from "react";
import { useEffect } from "react";
import firestore from "../../common/firebaseConf";

import "../../common/display.css";

import ProjSlider from "../../common/ProjSlider";
function ArchitectureMain() {
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
      .collectionGroup("rimages")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs[0].data());
        querySnapshot.docs.forEach((doc) => {
          console.log(id);
          // console.log(doc)s
          console.log(doc.ref.parent.parent.id);
          if (id === doc.ref.parent.parent.id) {
            let allData = doc.data();
            imgList = Object.values(allData);
            imgList.pop();
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
      .collection("Architecture")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc.data());
        setProj(doc.data());
        setLoading(false);
        let simItem = [];
        firestore
          .collection("Architecture")
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

export default ArchitectureMain;
