import { Parallax } from "react-parallax";
import bg from "../../../assets/music-note.jfif";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import {IoSend} from 'react-icons/io5'

const insideStyles = {
  //   background: "white",
  padding: 40,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "max-content",
};

const Consulting = () => {
  return (
    <div className="my-12">
      <Parallax bgImage={bg} blur={{ min: -1, max: 3 }}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>
            <div className="card glass p-2">
              <div className="card-body pt-0">
                <SectionTitle
                  heading={"Book a counselling session"}
                  subHeading={"Not sure where to start?"}
                ></SectionTitle>

                <div className="card-actions justify-center">
                  <Box
                    component="form"
                    autoComplete="on"
                    className="flex flex-col gap-1 w-full"
                    sx={{
                      maxWidth: "100%",
                    }}
                  >
                    <TextField type="text" label="Full Name" required />
                    <TextField type="email" label="Email Address" required />
                    <TextField type="number" label="Contact Number" required />
                    <TextField
                      multiline
                      // rows={4}
                      type="text"
                      label="Your Message"
                      required
                    />
                    <Button variant="contained" endIcon={<IoSend />}>
                      Send
                    </Button>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Consulting;
