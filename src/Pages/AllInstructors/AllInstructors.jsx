import React from "react";
import useInstructors from "../../Hooks/useInstructors";
import { Helmet } from "react-helmet-async";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import InstroctorCard from "./InstroctorCard";
import Skeleton from "@mui/material/Skeleton";

const AllInstructors = () => {
  const [instructors, isLoading] = useInstructors();

  if (isLoading) {
    return (
      <div className="w-screen h-screen">
        <Skeleton variant="rectangular" width="100%"></Skeleton>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Chorus Camp || Instructors</title>
      </Helmet>
      <PageBanner title={"Instructors of Chorus Camp"}></PageBanner>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-12">
        {instructors.map((instructor) => (
          <InstroctorCard
            key={instructor._id}
            item={instructor}
          ></InstroctorCard>
        ))}
      </div>
    </div>
  );
};

export default AllInstructors;
