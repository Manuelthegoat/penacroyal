import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import TotalCards from "../Components/TotalCards";
import TotalGraph from "../Components/TotalGraph";
import TotalTable from "../Components/TotalTable";
const Home = () => {
  return (
    <>
      <Breadcrumb />
      <TotalCards />
      <TotalTable />
      {/* <TotalGraph /> */}
    </>
  );
};

export default Home;
