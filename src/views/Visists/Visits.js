import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import MTable from "./MTable";
import { IoIosPeople } from "react-icons/io";
import "./carddisplay.css";
import outpatient from "../../images/out.png"
import inpatient from "../../images/inpatient.png"
import inpatient_color from "../../images/inpatient_colored.png"
import male from "../../images/male.png"
import female from "../../images/female.png"
import OpdvsIpd from "./OpdvsIpd";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1

  },
  card_ui: {
    margin: 20
  }
}));

const Visits = () => {
  const [visits, setVisits] = useState([]);
  useEffect(() => {
    axios
      .get("visits.json")
      .then(res => {
        console.log(res.data.results);
        const n = res.data.results;
        console.log(n.length);
        setVisits(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <div className="space_card"></div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>

    
            <div className="card card-1">
            <p className="card_heading">Outpatient</p>
            <p className="card_heading_two">7,000</p>
              <div className="top">
                <img
                  src={outpatient}
                  alt="material ui"
                /> 
              </div>
              {/* <div className="bottom">
             
              </div> */}
            </div>
         
        </Grid>
        <div className="space_card"></div>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
        <p className="card_heading">Inpatient</p>
        <p className="card_heading_two">3,000</p>
              <div className="top">
             
                <img
                  src={inpatient}
                  alt="material ui"
                />
              </div>
              {/* <div className="bottom">
                <p>Responsive UI</p>
              </div> */}
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
        <p className="card_heading">Male</p>
        <p className="card_heading_two">11,000</p>
              <div className="top">
                <img
                  src={male}
                  alt="material ui"
                />
              </div>
              {/* <div className="bottom">
                <p>10,000</p>
              </div> */}
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
        <p className="card_heading">Female</p>
        <p className="card_heading_two">9000</p>
              <div className="top">
                <img
                  src={female}
                  alt="material ui"
                />
              </div>
              {/* <div className="bottom">
                <p>10,000</p>
              </div> */}
            </div>
        </Grid>
      </Grid>

      <div>
        <Card>
        <OpdvsIpd />
        </Card>
      </div>
    </div>
  );
};

export default Visits;
