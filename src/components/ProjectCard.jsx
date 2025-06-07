import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function ProjectCard({ title, image, description }) {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        color: "white",
        borderRadius: 2,
        overflow: "hidden",
        width: "45%",
        maxWidth: 400,
        height: 280,
        margin: "auto",
        textAlign: "center",
        boxShadow: 3,
        marginTop: 2,
      }}
    >
      {/* Top Bar with Project Name */}
      <Box sx={{ py: 2, backgroundColor: "#1e1e1e" }}>
        <Typography variant="h6" fontSize="14px" fontWeight="bold" fontFamily={'"Source Code Pro", monospace'}>
          {title}
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "gray" }} />

      {/* Project Image */}
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: 140, // or any fixed height you prefer
          objectFit: "cover",
          display: "block"
        }}
      />

      <Divider sx={{ borderColor: "gray" }} />

      {/* Description */}
      <Box sx={{ p: 1 }}>
        <Typography variant="body1" fontFamily={'"Source Code Pro", monospace'} fontSize="10px">{description}</Typography>
      </Box>
    </Box>
  );
}
