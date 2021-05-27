import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import data from './../../data.json';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin:10
  },
});

// console.log(data)

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
 
   data.blogData.map((blogData,i) => {
     return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={blogData.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {blogData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         
        <Button 
        style ={{marginLeft:"120px",color:"white", backgroundColor:"red", borderRadius:"10px", fontSize:"9px"}}
        size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
     )
   })
 
     
    
  );
}
export function TopNewsBlog() {
  const classes = useStyles();

  return (
 
   data.blogData.map((blogData,i) => {
     return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={blogData.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {blogData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         
        <Button 
        style ={{marginLeft:"120px",color:"white", backgroundColor:"red", borderRadius:"10px", fontSize:"9px"}}
        size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
     )
   })
 
     
    
  );
}
export  function TopNews() {
  const classes = useStyles();

  return (
 
   data.blogData.map((blogData,i) => {
     return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={blogData.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {blogData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         
        <Button 
        style ={{marginLeft:"120px",color:"white", backgroundColor:"red", borderRadius:"10px", fontSize:"9px"}}
        size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
     )
   })
 
     
    
  );
}
export function TopNewsAll(){
  const classes = useStyles();

  return (
 
   data.blogData.map((blogData,i) => {
     return(
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={blogData.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             {blogData.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         
        <Button 
        style ={{marginLeft:"120px",color:"white", backgroundColor:"red", borderRadius:"10px", fontSize:"9px"}}
        size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
     )
   })
 
     
    
  );
}



 