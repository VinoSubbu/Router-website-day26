import React from "react";
import { useNavigate } from 'react-router-dom';
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

const AllCourses = () => {

  const navigate = useNavigate();

  const handleFsdClick = () => {
    navigate('/full-stack-development');
  };

  const handleDataScienceClick = () => {
    navigate('/data-science');
  };

  const handleCyberClick = () => {
    navigate('/cyber-security');
  };

  const handleCareerClick = () => {
    navigate('/career');
  };

  return (
    <div>
      <div className="head">
        <h2 className="course-heading">All Courses</h2>
      </div>

      <div className="all-content">
        <div className="course-content">
          <div className="course-btns">
            <Button variant="contained" onClick={handleFsdClick}>
              Full Stack Development{" "}
              <ArrowForwardIcon style={{ paddingLeft: "1rem" }} />
            </Button>
          </div>
          <div className="cousre-cards">
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia
                sx={{ height: 100 }}
                image={Data3}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Full Stack Development
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="course-content">
          <div className="cousre-cards">
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia
                sx={{ height: 100 }}
                image={Data2}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Data Science Course
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="course-btns">
            <Button variant="contained" onClick={handleDataScienceClick}>
              <ArrowBackIcon style={{ paddingRight: "1rem" }} /> Data Science
            </Button>
          </div>
        </div>

        <div className="course-content">
          <div className="course-btns">
            <Button variant="contained" onClick={handleCyberClick}>
              Cyber Security
              <ArrowForwardIcon style={{ paddingLeft: "1rem" }} />
            </Button>
          </div>
          <div className="cousre-cards">
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia
                sx={{ height: 100 }}
                image={Data1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cyber Security Course
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="course-content">
          <div className="cousre-cards">
            <Card sx={{ maxWidth: 245 }}>
              <CardMedia
                sx={{ height: 100 }}
                image={Data3}
                title="green iguana"  
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Your Career development
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="course-btns">
            <Button variant="contained" onClick={handleCareerClick}>
              <ArrowBackIcon style={{ paddingRight: "1rem" }} />
              Career
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
