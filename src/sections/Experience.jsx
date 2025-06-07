import "./Experience.css";
import Divider from "@mui/material/Divider";
import TimeLine from '../components/TimeLine'



export default function Experience() {
  return (
    <div className="experience">
      <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />
      <h1>Experience</h1>
      <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />
      <TimeLine/>
    </div>
  );
}
