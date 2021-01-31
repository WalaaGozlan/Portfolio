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

export default function Skills() {
  const classes = useStyles();

  function handleClick(){
window.location = "/skillsDetails"  
}

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://thumbs.dreamstime.com/b/man-holding-digital-tablet-business-skills-concept-man-holding-digital-tablet-business-skills-concept-135398530.jpg"
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
        Technical Skills
        </Button>
        {/* <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
