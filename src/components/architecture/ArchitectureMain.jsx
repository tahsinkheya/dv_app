import React, { useState } from "react";
import { useEffect } from "react";
import firestore from "../../common/firebaseConf";
import { Swiper, SwiperSlide } from "swiper/react"
import Typography from "@mui/material/Typography";
import "../../common/display.css"

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"
function ArchitectureMain() {
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
      .collectionGroup("rimages")
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.docs[0].data())
        querySnapshot.docs.forEach((doc) => {
        console.log(id)
        // console.log(doc)s
        console.log(doc.ref.parent.parent.id)
          if (id === doc.ref.parent.parent.id) {
            console.log(doc.data())
            imgList=Object.values(doc.data())
            // for (let i = 0; i < doc.data(); i++) {
            //   imgList.push(doc.data()[i]);
            //   console.log(doc.data()[i])
            // }
          }
        });
        setLoading(false);
        console.log(imgList)
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

  

  return <div><div style={{ paddingBottom: "0rem", paddingTop: "0rem" }} id="featuredP">
  <div
    style={{
      // backgroundColor: "lightgray",
      // paddingBottom: "1rem",
      // paddingTop: "1rem",
    }}
  >
    {/* <h1 >Brilliant Cloud Featured Products</h1> */}
    <div>
      <Swiper
        // initialSlide={1}
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={window.innerWidth > 600 ? 2 : 1}
        // coverflowEffect={{
        // 	rotate: 50,

        // 	depth: 100,
        // 	// modifier: 1,
        // 	slideShadows: false,
        // }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        // onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
      >
        {" "}
        {images.map((item, key) => (
          <SwiperSlide
            key={key}
           
          >
            <div
              style={
                {
                  // border: "0.1rem gray solid",
                  // padding: "3rem ",
                  // borderRadius: "3rem",
                }
              }
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  // src={allProducDets[item].imgLink}
                  src={item}
                  style={{
                    // width: "60vw",
                    width: "100vw",
                  }}
                />
              </div>
              <Typography variant="overline" style={{ fontSize: "2rem" }}>
                {/* {allProducDets[item].name} */}
              </Typography>

              <Typography variant="subtitle1">
                {/* {allProducDets[item].subtitle} */}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</div>
  </div>;
}

export default ArchitectureMain;
