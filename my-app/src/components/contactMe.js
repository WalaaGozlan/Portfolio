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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ContactMe() {
  const classes = useStyles();

  function handleClick(){
window.location = "/contactMeDetails"  
}

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://st.depositphotos.com/1265075/4570/i/950/depositphotos_45700477-stock-photo-website-contact-green-icons.jpg"
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
        <Button size="large" color="black" onClick={handleClick}>
          Contact Me
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
