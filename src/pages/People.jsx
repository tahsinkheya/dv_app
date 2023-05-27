import React from "react";
import firestore from "../common/firebaseConf";
import { useEffect, useState } from "react";
import { Card, Grid, Typography } from "@mui/material";
function People() {
  const [people, setPeople] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getImages();
  }, []);
  const getImages = async () => {
    let newList = [];

    await firestore
      .collection("People")
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          newList.push(doc.data());
        });
        setLoading(false);
        setPeople(newList);
      });
  };
  return (
    <div>
      <h1>It's Us</h1>

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
        {people.map((value, key) => (
          <Grid item xs={12} sm={12} md={3}>
            <Card
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem 1rem 1rem 1rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                // width: "30rem",
              }}
            >
              {" "}
              <img
                //   className={classes.dispImage}
                src={value.image}
                style={{ height: "7rem", borderRadius: "5rem" }}
                // title="Bangladesh College of Physicians and Surgeons"
              ></img>
              <br></br>
              <div style={{ textAlign: "center" }}>
                <div
                  className="text"
                  style={{ fontSize: "1rem", fontWeight: "bolder" }}
                >
                  {value.name}
                </div>
                <Typography variant="overline">{value.position}</Typography>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default People;
