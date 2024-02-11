import React, { useState } from "react";
import { useEffect } from "react";
import firestore from "../../common/firebaseConf";
function AcousticMain() {
  let id = new URLSearchParams(window.location.search).get("proj");
  const [simProj, setSimProj] = useState([]);
  const [loading, setLoading] = useState([]);
  const [images, setImages] = useState([]);
  const [proj, setProj] = useState();

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
        console.log(querySnapshot.docs[0].data())
        querySnapshot.docs.forEach((doc) => {
        console.log(id)
        // console.log(doc)s
        console.log(doc.ref.parent.parent.id)
          if (id === doc.ref.parent.parent.id) {
            console.log(doc.data())
            imgList=doc.data()
            // for (let i = 0; i < doc.data(); i++) {
            //   imgList.push(doc.data()[i]);
            //   console.log(doc.data()[i])
            // }
          }
        });
        setLoading(false);
        setImages(imgList);
        console.log(imgList[1])
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

  

  return <div></div>;
}

export default AcousticMain;
