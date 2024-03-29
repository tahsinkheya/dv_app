import React, { useState } from "react";
// import Markdown from "markdown-to-jsx";
// import { useEffect } from "react";
import firestore from "../common/firebaseConf";
import { useEffect } from "react";
import ImageWithTextText from "../common/ImageWithText";
import { Grid, Typography } from "@mui/material";
const Services = () => {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    await firestore
      .collection("Services")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          // nameList.push({ name: doc.data().name, id: doc.id });
          setInfo(doc.data());
        });
        setLoading(false);
        // setName(nameList);
      });
  };
  //   const [text, setText] = React.useState("");
  //   useEffect(() => {
  //     import("../documents/Services.md")
  //       .then((res) => {
  //         fetch(res.default)
  //           .then((res) => res.text())
  //           .then((res) => setText(res))
  //           .catch((err) => console.log(err));
  //         // console.log(text)
  //       })
  //       .catch((err) => console.log(err));
  //   });
  //   return (
  //     <div
  //       style={{
  //         paddingTop: "1.4rem",
  //         paddingLeft: "2rem",
  //         paddingRight: "2rem",
  //       }}
  //     >
  //       <Markdown>{text}</Markdown>
  //     </div>
  //   );
  return (
    <div style={{}}>
      <div
        style={
          {
            // paddingLeft: "1rem",
          }
        }
      >
        {/* <h1>Services</h1> */}

        <img
          style={{ height: "5rem", display: loading ? "inline" : "none" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/loader%2F4ec18efab377896244ec49f7d42f70-unscreen.gif?alt=media&token=53491c34-276d-49d7-81ec-417121c74d30"
          }
        ></img>
        <ImageWithTextText
          text={"Services"}
          image={info?.mainImg}
        ></ImageWithTextText>
      </div>
      <div style={{ maxWidth:"1200px"}}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch" style={{backgroundColor:"pink"}}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={6}
            md={6}
            xl={6}
            style={{ padding: "1rem", textAlign:"center"}}
          >
            <Typography
              variant="overline"
              style={{
                fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
              }}
            >
              {" "}
              Architecture
            </Typography>
            <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={6} md={6} xl={6} style={{display:"flex", textAlign:"center",justifyContent:"center", alignItems:"center"}}>
       
            <img style={{ width: "20vw" }} src={info.arch}></img>


          </Grid>
        </Grid>
      </div>
      </div>
    </div>
  );
};

export default Services;
