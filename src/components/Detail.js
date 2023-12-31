import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent } from "@mui/material";
import { Card,Grid } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
function Detail() {
    const student = useParams();

    const[APIData, setAPIData] = useState([]);
    const getStudentsUrl = `https://6532a37dd80bd20280f5de12.mockapi.io/students/${student.id}`;

    useEffect(() => {
        fetch(getStudentsUrl,{method:'GET'}).then(
            response => {
                if(!response.ok) {
                    throw new Error(`HTTP status: ${response.status}`);
                }
                return response.json();
            })
            .then(data=>{setAPIData(data)})
            .catch(error=>console.log(error.message));
        
    },[getStudentsUrl])

  return (
    <div>
         <h1>Detail</h1>
         <Grid container rowSpacing={2} >
          <Grid className='parent' item xs={12}>
          <Card className='child' sx={{ maxWidth: 545 }}>
      <CardMedia
        sx={{ height: 440 }}
        image={APIData.image}
        title="green iguana"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          {APIData.id}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {APIData.name}
        </Typography>
       
       
        <Typography gutterBottom variant="h5" component="div">
          {APIData.dateofbirth}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.gender ?"Male":"Female"}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.class}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {APIData.feedback}
        </Typography>
      </CardContent>
    </Card>


          </Grid>


          </Grid>
        
  
   
        

    </div>
  )
}

export default Detail