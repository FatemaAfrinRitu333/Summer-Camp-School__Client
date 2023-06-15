import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { FaArrowRight } from "react-icons/fa";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const InstroctorCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardHeader title={item.name} subheader={item.email} />
      <CardMedia
        component="img"
        height="194"
        image={item.photo}
        alt="Paella dish"
      />
      <CardContent>
        <div className="stat py-1 place-items-end">
          <div className="stat-desc">Instructor of</div>
          <div className="text-3xl font-bold text-info">{item.class}</div>
        </div>
        <div className="stats w-full">
          <div className="stat place-items-center">
            <div className="stat-value text-primary ">
              {item.numClassesTaken}
            </div>
            <div className="stat-desc">Classes Taken</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-value  text-secondary">
              {item.studentsEnrolled}
            </div>
            <div className="stat-desc text-secondary">Students Enrolled</div>
          </div>
        </div>
      </CardContent>
      <div className="text-right px-6 mb-3">
        <button className="btn btn-link text-info/50 btn-disabled cursor-not-allowed">
          See Classes <FaArrowRight />
        </button>
      </div>
    </Card>
  );
};

export default InstroctorCard;
