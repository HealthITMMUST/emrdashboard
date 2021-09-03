import React from "react";
import AccountCards from "./AccountCards";
import { colors } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCharts from "./AccountCharts";
import { Box, Container, Grid } from "@material-ui/core";
import OpdvsIpd from "../Visists/OpdvsIpd"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  title: {
    color: colors.indigo[500]
  },
  chartui: {
    margin: 20
  }
}));

const Accounts = () => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.title}></div>
      <div className={classes.root}>
        <AccountCards />
      </div>
      <div className={classes.chartui}>
        <AccountCharts />
      </div>
      <div>
     
      </div>
      
    </>
  );
};

export default Accounts;
