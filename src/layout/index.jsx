import React from "react";

const Layout = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "60vw" }}>
        <div
          style={{
            background: "#f6f6f6",
            height: 60,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          title
        </div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
