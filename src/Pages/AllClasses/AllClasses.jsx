import { Helmet } from "react-helmet-async";
import PageBanner from "../../Shared/PageBanner/PageBanner";
import ClassCard from "./ClassCard";
import useClasses from "../../Hooks/useClasses";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Classes = () => {
  const [classes, isLoading] = useClasses();
  console.log(classes);

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
    <div>
      <Helmet>
        <title>Chorus Camp || Instructors</title>
      </Helmet>
      <PageBanner
        title={"Classes"}
        subTitle={"Chorus Camp's available"}
      ></PageBanner>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-12">
        {classes.map((instructor) => (
          <ClassCard key={instructor._id} item={instructor}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
