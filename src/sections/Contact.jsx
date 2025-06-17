import "./Contact.css";
import { Divider, Paper } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

export default function Contact() {
  return (
    <>
      <header className="header">
        <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />
        <h1>Contact</h1>
        <Divider sx={{ borderColor: "#FFFFFF", borderStyle: "dashed" }} />{" "}
      </header>

      <div className="contact-list">
        <Paper
          className="contact-container"
          sx={{
            transition: "transform 300ms ease-in",
          }}
        >
          <a
            href="https://github.com/Philipkh18"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="contact">
              <GitHubIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                  color: "white",
                }}
              />
              <span className="links">Github</span>
            </div>
          </a>
        </Paper>
        <Paper
          className="contact-container"
          sx={{
            transition: "transform 300ms ease-in",
          }}
        >
          <a
            href="https://www.linkedin.com/in/philip-hadiwidjaja/" // <-- update to your real LinkedIn
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="contact">
              <LinkedInIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "5px",
                  color: "#0077B5",
                }}
              />
              <span className="links">LinkedIn</span>
            </div>
          </a>
        </Paper>
        <Paper
          className="contact-container"
          sx={{
            transition: "transform 300ms ease-in",
          }}
        >
          <a
            href="mailto:philipkh@umich.edu"
            className="contact-link"
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="contact">
              <EmailIcon
                sx={{
                  height: "30px",
                  width: "30px",
                  marginRight: "0px",
                  color: "white",
                }}
              />
              <span className="links">philipkh@umich.edu</span>
            </div>
          </a>
        </Paper>
      </div>

      <div className="contact-list">
        <Paper
          className="contact-container"
          sx={{
            background: "#181818",
            padding: "16px 24px",
            boxSizing: "border-box",
            transition: "transform 300ms ease-in",
            width: "100%", // Match contact-container width
            height: "60px", // Match contact-container height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
            marginLeft: "9px",
            marginRight: "9px",
          }}
        >
          {/* Resume content here */}
          <DownloadIcon
            sx={{
              height: "30px",
              width: "30px",
              marginRight: "10px",
              color: "white",
            }}
          ></DownloadIcon>
          <a
            className="links"
            href="/PhilipHadiwidjaja_ResumeD[2025].docx (2).pdf"
            download={"Philip-Resume.pdf"}
          >
            Download my resume
          </a>
        </Paper>
      </div>
    </>
  );
}
