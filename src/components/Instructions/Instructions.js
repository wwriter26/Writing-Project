import React from "react";
import { Typography, Container, Card } from "@mui/material";
import "./Instructions.css";

 
const Instructions = () => {
  const TiktokTopics = [
    {
      title: "changing a tire",
      url: "https://www.tiktok.com/embed/your-video-id-1",
      descriptiveSteps: [
        "1. Gather all of the necessary tools and equipment typically found in the trunk of your car.",
        "2. Loosen the lug nuts on the tire(using the key if needed).",
        "3. Read the jack instructions and locate the proper jacking points on the car.",
        "4. Jack up the car until the tire is off the ground.",
        "5. Remove the lug nuts and the tire.(If the tire is stuck, kick it lightly at an angle to loosen it.)",
        "6. Replace the tire with the new winter tire/spare.(to get it on, sit down and lift the tire up with your feet)",
        "7. Tighten the lug nuts in a star pattern. then lower the car completely and tighten them again.",
      ]
    },
    {
      title: "jumpstarting a car",
      url: "https://www.tiktok.com/embed/your-video-id-2",
      descriptiveSteps: [
        "1. Park the cars close enough so that the jumper cables can reach both batteries.",
        "2. Make sure they are in park.",
        "3. Attach the red jumper cable to the positive terminal of the dead battery.(order really doesn't matter)",
        "4. Attach the other red jumper cable to the positive terminal of the working battery.",
        "5. Attach the black jumper cable to the negative terminal of the working battery.",
        "6. Attach the other black jumper cable to an unpainted metal surface on the dead car.",
        "7. Let it run for a few minutes.(Working car has to be running)",
      ]
    },
    {
      title: "Getting unstuck from snow",
      url: "https://www.tiktok.com/embed/your-video-id-3",
      descriptiveSteps: [
        "1. Use a shovel to clear the snow from around the tires.",
        "2. Put something under the tires for traction.",
        "3. Rock the car back and forth to get it out.",
        "4. If that doesn't work, call for help.",
      ]
    },
    {
      title: "Driving in the snow",
      url: "https://www.tiktok.com/embed/your-video-id-4",
      descriptiveSteps: [
        "1. Drive slowly.",
        "2. Don't make sudden movements.",
        "3. Don't tailgate.",
        "4. Be prepared for skids.(link to video)",
        "5. Use winter tires.",
      ]
    },
    {
      title: "List of every snow item you need in your car",
      url: "https://www.tiktok.com/embed/your-video-id-5",
      descriptiveSteps: [
        "1. Ice scraper.",
        "2. winter tires.",
        "3. traction boards.",
        "4. winter preparedness kit.(premade kit that includes jumper cables, first aid kit, etc. and is available online)",
        "6. kitty litter.",
        "7. blankets.",
        "8. Shovel.",
      ]
    }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Written Instructions
      </Typography>
      <Typography paragraph>
        1. Correcting a skid: Steer gently in the direction of the skid while
        avoiding sudden movements.
      </Typography>
      <Typography paragraph>
        2. Safe following distances: Maintain at least 4-6 seconds of
        separation between your vehicle and others.
      </Typography>
      <Typography paragraph>
        3. Use winter tires for better traction on icy roads.
      </Typography>
    </Container>
  );
};

export default Instructions;
