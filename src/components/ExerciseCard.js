import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            borderRadius: "20px",
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FFDC52",
            borderRadius: "20px",
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {exercise.equipment}
        </Button>
      </Stack>
      <Typography
        fontSize="20px"
        fontWeight="bold"
        textTransform="capitalize"
        sx={{
          textDecoration: "none",
          ml: "15px",
          mb: "7px",
          color: "black",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
