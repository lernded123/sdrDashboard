// NotFound.js
import React from "react";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "3em" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.5em" }}>
        Looks like you've followed a broken link or entered a URL that doesn't
        exist on this site.
      </p>
      {/* Add any additional content or links as needed */}
    </div>
  );
};

export default NotFound;
