import React from "react";
import Helmet from "react-helmet";
import "../styles/404.scss";

const NotFoundPage = () => (
  <Helmet>
    <title>Page Not Found</title>
  </Helmet>
  <div className="pageNotFound  container">
    <h1 className="pageNotFound-title">NOT FOUND</h1>
    <p className="pageNotFound-description">{`
(___________________________()6 \`-,
(   ______________________   /''"\`
//\\                      //\\
"" ""                     "" ""
    `}</p>
  </div>
);

export default NotFoundPage;
