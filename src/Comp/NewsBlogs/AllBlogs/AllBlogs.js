import React from 'react';
import Slider from "react-slick"; 

import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";




const useStyles = muiBaseTheme => ({
    card: {
        position: "absolute",
        left: "6%",
        backgroundColor:"grey",
        
        height: "875px",
        width: "878px",
        margin: "auto",
        marginTop: "52px",
        transition:"0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      
         
      
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
      paddingTop: "56.25%"
    },
    content: {
      textAlign: "left",
      padding: muiBaseTheme.spacing.unit * 3
    },
    divider: {
      margin: `${muiBaseTheme.spacing.unit * 3}px 0`
    },
    heading: {
      fontWeight: "bold"
    },
    subheading: {
      lineHeight: 1.8
    }
})

 



function App() {
    const classes = useStyles();
    return (
      <div className="App">
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={
                "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
              }
          />
          {/* <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              Nature Around Us
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              We are going to learn different kinds of species in nature that live
              together to form amazing environment.
            </Typography>
            <Divider className={classes.divider} light />
             
          </CardContent> */}
        </Card>
      </div>
    );
  }
  
  const AllBlogs = withStyles()(App);
  export default AllBlogs;
   