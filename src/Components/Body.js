import React from "react";
import {
  Stack,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

export default function Body() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h3"
          sx={{ marginTop: "90px", textAlign: "center" }}
        >
          Namaste
        </Typography>
        <Typography
          variant="inherient"
          color="text.secondary"
          align="center"
          paragraph
        >
          My name is Kishor Kc from Ratnanagar-6,Chitwan. I am pursuing BCA in
          Birendra Multiple Campus, Bharatpur. I am learning reactjs as to
          trying to build the some project and share those stuffs via Github.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          spacing={2}
          direction="row"
          justifyContent="center"
        >
          <Button variant="contained">Connect Me</Button>
          <Button variant="outlined">Hire Me</Button>
        </Stack>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {count.map((c) => (
            <Grid item key={c} xs={12} sm={6} md={4}>
              <Card sx={{ borderRadius: "20px" }}>
                <CardMedia
                  sx={{
                    borderRadius: "20px",
                    height: "250px",
                  }}
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent>
                  <Typography>Getting the images from unsplash</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Change</Button>
                  <Button size="small">Update</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
