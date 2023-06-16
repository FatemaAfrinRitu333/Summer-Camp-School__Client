import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import ClassItem from "./ClassItem";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Classes = () => {
  const [classes, isLoading] = useClasses();
  // const [popular, setPopular] = useState();
  console.log(classes);
  const popular = classes.slice(0, 6);
  console.log(popular);

  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="secondary" />
        </Box>
      </div>
    );
  }

  return (
    <div className="my-20">
      <SectionTitle
        heading={"Summer Classes"}
        subHeading={"Our most popular"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {popular.map((item) => (
          <ClassItem key={item._id} item={item}></ClassItem>
        ))}
      </div>
    </div>
  );
};

export default Classes;
