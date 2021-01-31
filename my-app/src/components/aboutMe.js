// import React from "react";

// export default function AboutMe (){
//     return (
//         <div>
//         <p>
//         I'm seeking to help people make their lives easier by applying
//         technologies in our daily life and passionate about put my self 
//         effect by writing clear and clean code.
//         </p>
//         </div>
//     );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import AboutMeImg from "./aboutMe.jpg"


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function AboutMe() {
  const classes = useStyles();

  function handleClick(){
window.location = "/aboutMeDetails"  
}

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={AboutMeImg}
          //"https://www.nicoleisthenewblack.com/wp-content/uploads/2011/09/vintage-hand-about-me.png"
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         
          </Typography>
        </CardContent> */}
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="large" color="primary" onClick={handleClick}>
          About Me
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
