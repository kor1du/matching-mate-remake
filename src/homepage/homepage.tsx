import React from "react";
import HomepageHeader from "./views/homepageHeader";
import HomepageFooter from "./views/homepageFooter";

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <HomepageHeader></HomepageHeader>
      <HomepageFooter></HomepageFooter>
    </div>
  );
};
export default Homepage;
