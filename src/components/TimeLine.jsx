import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";

//Icons
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";

import "./TimeLine.css";
import { BorderColor } from "@mui/icons-material";

export default function TimeLine() {
  return (
    <Timeline position="alternate" className="timeline-container">
      <TimelineItem className="job">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="content">
          <Paper className="timeline-paper" elevation={0}>
            <h5>Bank BNI New York Agency</h5>
            <Divider
              sx={{
                borderBottomWidth: ".25px",
                borderColor: "white",
              }}
            ></Divider>
            <div className="job-header">
              <WorkOutlineOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Software Engineer</h6>
            </div>
            <div className="job-header">
              <LocationOnOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>New York, NY</h6>
            </div>
            <div className="job-header">
              <DateRangeOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>May, 2025 - Present</h6>
            </div>
            <Divider
              sx={{
                mt: 2,
                fontSize: "10px",
                color: "white",
                borderColor: "white",
                borderBottomWidth: ".25px",
                "&::before": {
                  borderTop: "0.25px solid white",
                },
                "&::after": {
                  borderTop: "0.25px solid white",
                },
              }}
            >
              Highlights
            </Divider>
            <div className="description">
              <p>Ongoing</p>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="job">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="content">
          <Paper className="timeline-paper" elevation={0}>
            <h5>Bang Jamin Insurnace</h5>
            <Divider
              sx={{
                borderBottomWidth: ".25px",
                borderColor: "white",
              }}
            ></Divider>
            <div className="job-header">
              <WorkOutlineOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Software Engineer</h6>
            </div>
            <div className="job-header">
              <LocationOnOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Remote</h6>
            </div>
            <div className="job-header">
              <DateRangeOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>May 2024 - August 2024</h6>
            </div>
            <Divider
              sx={{
                mt: 2,
                fontSize: "10px",
                color: "white",
                borderColor: "white",
                borderBottomWidth: ".25px",
                "&::before": {
                  borderTop: "0.25px solid white",
                },
                "&::after": {
                  borderTop: "0.25px solid white",
                },
              }}
            >
              Highlights
            </Divider>
            <div className="description">
              <p>
                {" "}
                Forecasted regional revenue and customer retention across 5+
                regions using Python, SQL, and Pandas
              </p>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="job">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="content">
          <Paper className="timeline-paper" elevation={0}>
            <h5>NASA</h5>
            <Divider
              sx={{
                borderBottomWidth: ".25px",
                borderColor: "white",
              }}
            ></Divider>
            <div className="job-header">
              <WorkOutlineOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Researcher</h6>
            </div>
            <div className="job-header">
              <LocationOnOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>New York, NY</h6>
            </div>
            <div className="job-header">
              <DateRangeOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>September 2022 - December 2022</h6>
            </div>
            <Divider
              sx={{
                mt: 2,
                fontSize: "10px",
                color: "white",
                borderColor: "white",
                borderBottomWidth: ".25px",
                "&::before": {
                  borderTop: "0.25px solid white",
                },
                "&::after": {
                  borderTop: "0.25px solid white",
                },
              }}
            >
              Highlights
            </Divider>
            <div className="description">
              <p>
                Led a team of 4 researchers analyzing data encryption models and
                breach vulnerabilities
              </p>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="job">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="content">
          <Paper className="timeline-paper" elevation={0}>
            <h5>Blueprints for Pangaea</h5>
            <Divider
              sx={{
                borderBottomWidth: ".25px",
                borderColor: "white",
              }}
            ></Divider>
            <div className="job-header">
              <WorkOutlineOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>App developer</h6>
            </div>
            <div className="job-header">
              <LocationOnOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Ann Arbor, MI</h6>
            </div>
            <div className="job-header">
              <DateRangeOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Sept 2024 - Present</h6>
            </div>
            <Divider
              sx={{
                mt: 2,
                fontSize: "10px",
                color: "white",
                borderColor: "white",
                borderBottomWidth: ".25px",
                "&::before": {
                  borderTop: "0.25px solid white",
                },
                "&::after": {
                  borderTop: "0.25px solid white",
                },
              }}
            >
              Highlights
            </Divider>
            <div className="description">
              <p>
                Designed medical equipment scanner app using GPT-4 and Gemini
                API, eliminating manual input in inventory tracking
              </p>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem className="job">
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="content">
          <Paper className="timeline-paper" elevation={0}>
            <h5>ECO-UM</h5>
            <Divider
              sx={{
                borderBottomWidth: ".25px",
                borderColor: "white",
              }}
            ></Divider>
            <div className="job-header">
              <WorkOutlineOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Environmental Consultant</h6>
            </div>
            <div className="job-header">
              <LocationOnOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Ann Arbor, MI</h6>
            </div>
            <div className="job-header">
              <DateRangeOutlinedIcon sx={{ fontSize: "small" }} />
              <h6>Aug 2023 - Present</h6>
            </div>
            <Divider
              sx={{
                mt: 2,
                fontSize: "10px",
                color: "white",
                borderColor: "white",
                borderBottomWidth: ".25px",
                "&::before": {
                  borderTop: "0.25px solid white",
                },
                "&::after": {
                  borderTop: "0.25px solid white",
                },
              }}
            >
              Highlights
            </Divider>
            <div className="description">
              <p>
                Revamped client website UI increasing traffic and driving record
                event sign-ups
              </p>
            </div>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
