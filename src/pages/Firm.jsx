import React from "react";
import Markdown from "markdown-to-jsx";
import { useEffect } from "react";
const Firm = () => {
  const [text, setText] = React.useState("");
  useEffect(() => {
    import("../documents/Firm.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setText(res))
          .catch((err) => console.log(err));
        // console.log(text)
      })
      .catch((err) => console.log(err));
  });
  return (
    <div
      style={{
        paddingTop: "1.4rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default Firm;
