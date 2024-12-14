import React from "react";
import { Grid, Typography, Container, Button } from "@mui/material";
import { GiCarWheel } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdDriveEta, MdOutlineAddShoppingCart } from "react-icons/md";
import { BsSnow2 } from "react-icons/bs";
import { LuCable } from "react-icons/lu";
import "./TikToks.css";

const TikToks = () => {
  const tiktokProfiles = [
    {
      name: "Our TikTok Profile Page",
      url: "https://www.tiktok.com/@cold.conditions.s?is_from_webapp=1&sender_device=pc",
      logo: <CgProfile />,
    },
    {
      name: "Changing Into Winter Tires",
      url: "https://www.tiktok.com/@cold.conditions.s/video/7444630780959001887?is_from_webapp=1&sender_device=pc&web_id=7418057621440415274",
      logo: <GiCarWheel />,
    },
    {
      name: "Jumpstarting A Car",
      url: "https://www.tiktok.com/@safe.driving.winter",
      logo: <LuCable/>,
    },
    {
      name: "Getting Unstuck From Snow",
      url: "https://www.tiktok.com/@cold.conditions.s/video/7446478968372383006?is_from_webapp=1&sender_device=pc&web_id=7418057621440415274",
      logo: <BsSnow2 />,
    },
    {
      name: "Driving In The Snow ",
      url: "",
      logo: <MdDriveEta />,
    },
    {
      name: "Essential Snow Supplies",
      url: "https://www.tiktok.com/@cold.conditions.s/video/7445095585897598239?is_from_webapp=1&sender_device=pc&web_id=7418057621440415274",
      logo: <MdOutlineAddShoppingCart />,
    },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center">
        TikTok Videos
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Check out our TikTok profiles for winter driving tips, snowstorm preparation, and safety advice.
      </Typography>
      <Grid container spacing={4}>
        {tiktokProfiles.map((profile, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Button
              className="tiktok__button"
              variant="contained"
              color="primary"
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                textTransform: "none",
                padding: "110px 20px",
                fontSize: "16px",
              }}
            >
              {profile.name}
              {profile.logo}              
            </Button>
          </Grid>
        ))}
        
      </Grid>
    </Container>
  );
};

export default TikToks;
