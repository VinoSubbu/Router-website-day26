import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Data1 from "../assets/Data1.jpeg";
import Data2 from "../assets/Data2.jpg";
import Data3 from "../assets/Data3.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Career = () => {
  const navigate = useNavigate();

  const handlehome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2 className="course-heading">Career Content</h2>
      <div
        className="cards"
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <Card sx={{ maxWidth: 245 }}>
          <CardMedia sx={{ height: 100 }} image={Data3} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Career Content
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Career Content helps build and maintain both the front-end and the
              back-end of a website
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Apply</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 245 }}>
          <CardMedia sx={{ height: 100 }} image={Data2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Career Content
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Career Content helps build and maintain both the front-end and the
              back-end of a website
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Apply</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
      <div className="course-btns" style={{textAlign:'center' , marginBottom:'2rem' }}>
        <Button variant="contained" onClick={handlehome}>
          <ArrowBackIcon style={{ paddingRight: "1rem" }} />
          Back to All Courses
        </Button>
      </div>
    </div>
  );
};

export default Career;
