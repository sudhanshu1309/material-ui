import React from "react";
import TourCard from "../components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ marginY: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>
              <Grid container spacing={2}>
                {city.tours.map((tour, index) => (
                  <TourCard tour={tour} key={index} />
                ))}
              </Grid>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default Home;