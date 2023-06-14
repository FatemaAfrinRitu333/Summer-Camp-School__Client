import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import ClassItem from "./ClassItem";
import Skeleton from '@mui/material/Skeleton';


const Classes = () => {
  
    const [classes, isLoading] = useClasses();
    console.log(classes)

    if(isLoading){
      return <Skeleton variant="rectangular" width="100%">
    </Skeleton>
    }

  return (
    <div className="my-20">
      <SectionTitle
        heading={"Summer Classes"}
        subHeading={"Enroll in"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {
            classes.map(item=><ClassItem
            key={item._id}
            item={item}
            ></ClassItem>)
        }
      </div>
    </div>
  );
};

export default Classes;
