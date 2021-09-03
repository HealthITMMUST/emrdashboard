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
              <div className="top">
                <img
                  src={outpatient}
                  alt="material ui"
                />
                <p>Outpatient</p>
                10,000 Patients
              </div>
              <div className="bottom">
             
              </div>
            </div>
         
        </Grid>
        <div className="space_card"></div>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
              <div className="top">
                <img
                  src="https://s-media-cache-ak0.pinimg.com/originals/45/2c/e7/452ce7c3ce3034806cf0fc781173507e.gif"
                  alt="material ui"
                />
              </div>
              <div className="bottom">
                <p>Responsive UI</p>
              </div>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
              <div className="top">
                <img
                  src={outpatient}
                  alt="material ui"
                />
              </div>
              <div className="bottom">
                <p>10,000</p>
              </div>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <div className="card card-1">
              <div className="top">
                <img
                  src={outpatient}
                  alt="material ui"
                />
              </div>
              <div className="bottom">
                <p>10,000</p>
              </div>
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
