import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClasses from "../../../Hooks/useClasses";
import ClassItem from "./ClassItem";


const Classes = () => {
  
    const [classes] = useClasses();
    console.log(classes)

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
