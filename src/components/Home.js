import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
function Home() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    const baseURL = `https://6532a37dd80bd20280f5de12.mockapi.io/students`;
    axios
      .get(baseURL)
      .then((response) => {
        const sortedData = response.data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setAPIData(sortedData);
      })
      .catch((error) => console.error("Error", error.message));
  }, []);
  return (
    <div>
      <Container>
        <h1 className="font-pages">Home</h1>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {APIData.map((student) => (
            <Grid item xs={6} sm={4} md={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={student.image}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link to={`detail/${student.id}`}>
                      <a>{student.id}</a>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.dateofbirth}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.gender? 'Male':'Female'}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    {student.class}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`detail/${student.id}`}>
                    <Button size="small">Detail</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
