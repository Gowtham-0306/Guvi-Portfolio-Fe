import {Grid} from "@mui/material"

import styles from './banner.module.css'
import { Nameboard } from "./nameboard"
import { Navbar } from "./navbar/navbar"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export default function Cardcomponent({technologies={technologies}}){

// return (




// <>
// <Grid item style={{"padding" : "20px"}}>

                   
// <img src={url} alt="" style={{ borderRadius: "4%", border: "0px solid #fff", width: "200px", height: "200px" }} />
// </Grid>




// </>
// )


const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 305 }} style={{"marginLeft" : "15px" 

        , "marginTop" : "10px"
    }}>
      <Typography variant="h5" style={{"fontFamily" : "sans-serif" , "fontSize" : "medium"
        ,"padding" : "10px" , "textAlign" : "center"
      }}>
{technologies.name}
      </Typography>



      
      <CardMedia
        component="img"
        height="220"
        image={technologies.imageurl}
        alt="Paella dish"
      />
    
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
       <Typography variant="h1" style={{"fontSize" : "x-small"}}>
        click the arrow button to see more
       </Typography>
        <ExpandMore
          expand={{}}
          onClick={handleExpandClick}
       
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>see more</Typography>
          <Typography paragraph>
            {technologies.description}
          </Typography>
       
        </CardContent>
      </Collapse>
    </Card>
  );








}