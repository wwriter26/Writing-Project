import React from "react";
import { Typography, Container, Grid, Paper } from "@mui/material";
import danny from "../../assets/images/danny.png";
import will from "../../assets/images/will.png";
import jacob from "../../assets/images/jacob.png";
import "./AboutUs.css";

const AboutUs = () => {
  const team = [
    { name: "William Writer", role: "Act, Film, Script Writing, Content Manager", img: will },
    { name: "Daniel Desmond", role: "Act, Film, Script Writing, Video Editing", img: danny },
    { name: "Jacob Stiegler", role: "Act, Film, Script Writing, Researcher", img: jacob },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom sx={{fontWeight: "bold", backgroundColor: "lightblue", padding: "10px 0px", borderRadius: "10px", width: "75%", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", marginBottom: "20px"}}>
        Our Roles
      </Typography>
      <Grid container spacing={4}>
        {team.map((member, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography variant="h6">{member.name}</Typography>
              <Typography>{member.role}</Typography>
              <img className="aboutus__images" src={member.img} alt="us" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
