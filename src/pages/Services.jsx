import React, { useState } from "react";
// import Markdown from "markdown-to-jsx";
// import { useEffect } from "react";
import firestore from "../common/firebaseConf";
import { useEffect } from "react";
import ImageWithTextText from "../common/ImageWithText";
import { Divider, Grid, Typography } from "@mui/material";
import { WindPower } from "@mui/icons-material";
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
      {loading ? (
        <img
          style={{ height: "5rem", display: loading ? "inline" : "none" }}
          src={
            "https://firebasestorage.googleapis.com/v0/b/dv-app-a159c.appspot.com/o/loader%2F4ec18efab377896244ec49f7d42f70-unscreen.gif?alt=media&token=53491c34-276d-49d7-81ec-417121c74d30"
          }
        ></img>
      ) : (
        <>
          <div>
            <ImageWithTextText
              text={"Services"}
              image={info?.mainImg}
            ></ImageWithTextText>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "1200px" }}>
              <div
                style={
                  {
                    // display: "flex",
                  }
                }
              >
                <Grid
                  container
                  direction={window.innerWidth > 700 ? "row" : "column"}
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
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
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      Our architectural services begin with an analysis of
                      client’s needs and objectives, and result in the creation
                      of a project that meets the intended functional,economical
                      and aesthetical requirements. Our team develops Design
                      concepts; translates them into conventional working
                      drawings and specifications; then ready for construction.
                      We can also assist clients in the bidding process and
                      construction management to meet quality, time and cost.
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.arch}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction={window.innerWidth > 700 ? "row" : "column"}
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      Interior Design
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      Design & Supervision of Residential, Commercial, Clinics,
                      Corporate Offices, Retails, Showrooms, Restaurants,
                      Exhibition Spaces etc. Our effort has been not to treat
                      interior design as embellishment or decoration, it is
                      actually much more. We design interiors with the same care
                      and understandingof representation as building design
                      itself. Our services in this area are particular and
                      specialized.
                    </Typography>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.arch}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      Acoustic & Vibration Control
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      Design Vision Associates Ltd is involved with precision
                      and specialized works related to acoustic and vibration
                      control. Our team is qualified to calculate, design and
                      build solutions on various Acoustic issues. Our solutions
                      are with guaranteed performance and can meet necessary
                      requirements and specifications. Ipsum.
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.int}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      Project Management
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      We have extensive experience in the management and
                      planning projects thus able to work in close association
                      with supporting professional groups specializing in
                      engineering, landscaping,surveying, environment science,
                      marketing, transport, finance and law. Our services
                      include resource allocation, cost control, financial
                      management, project programming and construction
                      management. On special request, the team can provide
                      building management and maintenance also.
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.int}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      Design & Build Package
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      Design and build means, we will design a project first and
                      we will do the construction thereafter. Complete Design &
                      Build package for Residences, Factories, Commercial and
                      Residential Interior projects. We offer complete delivery
                      of the product – the building by the architect – where
                      design and execution become one and client is spared the
                      responsibility of managing contractors and other agencies
                      and is ensured of quality and materials at competitive
                      prices.
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.int}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      EPC/ LSTK
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      <b>Engineering, Procurement, and Construction (EPC)</b> or
                      Lump Sum Turn Key (LSTK) is a particular form of
                      contracting arrangement used in some industries where the
                      EPC Contractor is made responsible for all the activities
                      from design, procurement, construction, to commissioning
                      and handover of the project to the End-User or Owner.
                      <br></br>
                      <b>
                        Engineering, Procurement, and Construction Management
                        (EPCM)
                      </b>{" "}
                      is a special form of contracting arrangement. In an EPCM
                      arrangement, the client selects a contractor who provides
                      "management services" for the whole project on behalf of
                      the client. The EPCM contractor may or may not undertake
                      actual site work. Design Vision Associates Ltd. is
                      experienced with EPC/ EPCM kind of works. We have
                      completed quite a few EPC/ EPCM works{" "}
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.int}
                    ></img>
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="stretch"
                  style={{ paddingTop: "1rem" }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
                    style={{ padding: "1rem", textAlign: "center" }}
                  >
                    <Typography
                      variant="overline"
                      style={{
                        fontSize: window.innerWidth > 700 ? "1.5rem" : "0.8rem",
                      }}
                    >
                      {" "}
                      Others
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      style={{ textAlign: "justify" }}
                    >
                      As an experienced Design consultancy firm we are able to
                      perform any kind of work related to Architecture,
                      Engineering, Interior and Visual Design.
                    </Typography>
                  </Grid>{" "}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    lg={6}
                    md={6}
                    xl={6}
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
                      src={info.int}
                    ></img>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Services;
