import React, { useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import ClassItem from "./ClassItem";
import Skeleton from '@mui/material/Skeleton';


const Classes = () => {
  
    const [classes, isLoading] = useClasses();
    // const [popular, setPopular] = useState();
    console.log(classes)
    const popular = classes.slice(0, 6);
    console.log(popular);

    if(isLoading){
      return <Skeleton variant="rectangular" width="100%">
    </Skeleton>
    }

  return (
    <div className="my-20">
      <SectionTitle
        heading={"Summer Classes"}
        subHeading={"Enroll in our most popular"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {
            popular.map(item=><ClassItem
            key={item._id}
            item={item}
            ></ClassItem>)
        }
      </div>
    </div>
  );
};

export default Classes;
