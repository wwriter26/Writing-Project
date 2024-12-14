import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@mui/material";
import "./Home.css";

const Home = () => {
  const TiktokTopics = [
    {
      title: "Changing Into Winter Tires",
      url: "https://www.tiktok.com/embed/your-video-id-1",
      descriptiveSteps: [
        "Gather all of the necessary tools and equipment typically found in the trunk of your car.",
        "Loosen the lug nuts on the tire(using the key if needed).",
        "Read the jack instructions and locate the proper jacking points on the car.",
        "Jack up the car until the tire is off the ground.",
        "Remove the lug nuts and the tire.(If the tire is stuck, kick it lightly at an angle to loosen it.)",
        "Replace the tire with the new winter tire/spare.(to get it on, sit down and lift the tire up with your feet)",
        "Tighten the lug nuts in a star pattern. then lower the car completely and tighten them again.",
      ],
    },
    {
      title: "Jumpstarting A Car",
      url: "https://www.tiktok.com/embed/your-video-id-2",
      descriptiveSteps: [
        "Park the cars close enough so that the jumper cables can reach both batteries.",
        "Make sure they are in park.",
        "Attach the red jumper cable to the positive terminal of the dead battery.(order really doesn't matter)",
        "Attach the other red jumper cable to the positive terminal of the working battery.",
        "Attach the black jumper cable to the negative terminal of the working battery.",
        "Attach the other black jumper cable to an unpainted metal surface on the dead car.",
        "Let it run for a few minutes.(Working car has to be running)",
      ],
    },
    {
      title: "Getting Unstuck From Snow",
      url: "https://www.tiktok.com/embed/your-video-id-3",
      descriptiveSteps: [
        "Use a shovel to clear the snow from around the tires.",
        "Put something under the tires for traction.",
        "Rock the car back and forth to get it out.",
        "If that doesn't work, call for help.",
      ],
    },
    {
      title: "Driving In The Snow",
      url: "https://www.tiktok.com/embed/your-video-id-4",
      descriptiveSteps: [
        "Drive slowly.",
        "Don't make sudden movements.",
        "Don't tailgate.",
        "Be prepared for skids.",
        "Use winter tires.",
      ],
    },
    {
      title: "Essential Snow Supplies",
      url: "https://www.tiktok.com/embed/your-video-id-5",
      descriptiveSteps: [
        "Ice scraper.",
        "Winter tires.",
        "Traction boards.",
        "Winter preparedness kit (premade kit that includes jumper cables, first aid kit, etc. and is available online).",
        "Kitty litter.",
        "Blankets.",
        "Shovel.",
      ],
    },
  ];

  return (
    <Container className="home__container">
      {/* <img src={backgroundimg} alt="background image" className=""/> */}
      <Typography variant="h4" gutterBottom align="center" sx={{fontWeight: "bold", backgroundColor: "lightblue", padding: "10px 0px", borderRadius: "10px", width: "75%", display: "flex", alignItems: "center", justifyContent: "center", margin: "auto", marginBottom: "20px"}}>
        Welcome to Cold Conditions, Safe Decisions
      </Typography>
      <Typography align="center" sx={{backgroundColor: "red", padding: "10px 0px", borderRadius: "10px"}}>
        Did you know? Over 1,800 people die per year due to driving in snowy and icy conditions, according to the Federal Highway Administration. <br/>
      </Typography>
      <div className="home__cards">
        <Typography className="home__instructions" variant="h5">
          TikToks Written Instructions
        </Typography>
        <Typography className="home__subtitle" variant="body1" >
        Learn how to stay safe during winter driving with our engaging TikToks,
        detailed instructions, and team efforts.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {TiktokTopics.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="home__card">
                <CardContent>
                  <Typography className="home__title" variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <div className="home__card_body">
                  <Typography variant="body1" component="div">
                      <ol>
                        {item.descriptiveSteps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
