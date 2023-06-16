import useInstructors from "../../../Hooks/useInstructors";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import InstructorItem from "./InstructorItem";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Instructors = () => {
  const [instructors, isLoading] = useInstructors();
  console.log(instructors);
  const popular = instructors.slice(0, 6);

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
        heading={"Instructos"}
        subHeading={"our popular"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {popular.map((instructor) => (
          <InstructorItem
            key={instructor._id}
            item={instructor}
          ></InstructorItem>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
