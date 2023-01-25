import React from "react";
import Grid from "@mui/material/Grid";
const fs = require("fs");
const path = require("path");
const Acoustic = () => {
  const getPath = "../common/images";
  const [folderPaths,setFolderPaths]= React.useState([])
  const getFiles = () => {
    async () => {
      // Our starting point
      try {
        // Get the files as an array
        const files = await fs.promises.readdir(getPath);

        // Loop them all with the new for...of
        for (const file of files) {
          // Get the full paths
          const getPath = path.join(getPath, file);
          // const toPath = path.join(moveTo, file);

          // Stat the file to see if we have a file or dir
          const stat = await fs.promises.stat(fromPath);

          if (stat.isFile()) console.log("'%s' is a file.", fromPath);
          else if (stat.isDirectory())
            console.log("'%s' is a directory.", fromPath);

          // Now move async
          await fs.promises.rename(fromPath, toPath);

          // Log because we're crazy
          console.log("Moved '%s'->'%s'", fromPath, toPath);
        } // End for...of
      } catch (e) {
        // Catch anything bad that happens
        console.error("We've thrown! Whoops!", e);
      }
    };
  };

  return (
    <div style={{ paddingLeft: "1rem" }}>
      <h1>Acoustic Design</h1>
      <Grid
        container
        direction="row"
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      ></Grid>
    </div>
  );
};

export default Acoustic;
