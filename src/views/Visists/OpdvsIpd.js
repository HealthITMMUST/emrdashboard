import React from "react";
import Chart from "react-apexcharts";
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July","August","Sept","October","November","December"],
  datasets: [
    {
      label: "Outpatient",
      data: [1000, 2030, 1035, 2408, 2049, 1965,1290,2311,2003,3109,1233,1897],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Inpatient",
      data: [333, 252, 359, 511, 549, 376,576,200,987,103,300,230],
      fill: false,
      borderColor: "#742774"
    }
  ]
};

const legend = {
  display: true,
  position: "bottom",
  labels: {
    fontColor: "#323130",
    fontSize: 14
  }
};

const options = {
  title: {
    display: true,
    text: "Chart Title"
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    ]
  }
};

const useStyles = makeStyles({
  root: {
    margin:20
  }
 
});
const OpdvsIpd = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
      <Line data={data} legend={legend} options={options} />
      </Card>
    </>
  );
};

export default OpdvsIpd;
