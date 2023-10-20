import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      // untuk mendapatkan url API nya
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      // untuk mendapatkan API video tentang exercises tersebut
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const ExerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      console.log(ExerciseDetailData);
      setExerciseDetail(ExerciseDetailData);
    };
    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
