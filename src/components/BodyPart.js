import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

// ok
// kemudian ambil component pada horizontalscrollbar js yaitu item, bodyPart, dan setBodyPart
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#FFF",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt={`${item} Icon`}
        style={{ width: "40px", height: "40px" }}
      />
      {/* render item dari rapid api gym */}
      <Typography
        fontSize="24px"
        fontWeight="bold"
        textTransform="capitalize"
        color="#3A1212"
      >
        {console.log(bodyPart)}
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
