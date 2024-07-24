
import { Grid } from "@mui/material";
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandMore from "@mui/icons-material/ExpandMore";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";


export function Projectcards({myprojects = {myprojects}}) {
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
      
  return (
    <>
<Grid>

<Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        margin : "auto"
        
        ,
        marginTop : "20px"

        ,
        maxWidth: 350,
        backgroundColor: "black",
        borderRadius: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(10px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        },
        height: {
          xs: '530px', // height for extra small screens (mobile)
          sm: '530px', // height for small screens
          md: '530px', // height for medium screens and up
        },
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          color: "gold",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        <Typography variant="contained" style={{ color: "gold" }}>
          <WorkspacesIcon/>
        </Typography>
      </div>
      <img
        src={myprojects.imageurl}
        alt="Product"
        style={{
          height: "auto",
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }}
      />
      <CardContent
        sx={{
          padding: "16px",
          textAlign: "center",
          flexGrow: 1,
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            marginBottom: "8px",
            color: "gold",
          }}
        >
          {myprojects.projectname}
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            textDecoration: "bold",
            color: "#888",
            marginBottom: "8px",
          }}
        >
   
        </Typography>
        <Box sx={{ overflow: "hidden", marginBottom: "8px" }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "italic",
              color: "white",
              fontStyle: "italic",
              overflow: "hidden",
            }}
          >
            {myprojects.description}
          </Typography>
        </Box>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          borderRadius: "8px",
          marginTop: "auto",
        }}
        onClick={(event) => {
            window.open(myprojects.url);

console.log(myprojects);

        }}
      >
        Visit project
      </Button>
    </Card>

    

</Grid>







    </>
  );
}
