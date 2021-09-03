import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  }
}));
const AccountCards = props => {
      const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: "100%" }} {...props}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  BUDGET
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  240,000
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: red[600],
                    height: 56,
                    width: 56
                  }}
                >
                  <MoneyIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: "flex",
                alignItems: "center"
              }}
            >
              <ArrowDownwardIcon sx={{ color: red[900] }} />
              <Typography
                sx={{
                  color: red[900],
                  mr: 1
                }}
                variant="body2"
              >
                2%
              </Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
      <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL PATIENTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            1,600
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon sx={{ color: green[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: green[900],
            mr: 1
          }}
        >
          8%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: "100%" }} {...props}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                EXPENSES INCURRED
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  100,000
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: red[600],
                    height: 56,
                    width: 56
                  }}
                >
                  <MoneyIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: "flex",
                alignItems: "center"
              }}
            >
              {/* <ArrowDownwardIcon sx={{ color: red[900] }} /> */}
              <Typography
                sx={{
                  color: red[900],
                  mr: 1
                }}
                variant="body2"
              >
                12%
              </Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: "100%" }} {...props}>
          <CardContent>
            <Grid
              container
              spacing={3}
              sx={{ justifyContent: "space-between" }}
            >
              <Grid item>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  BUDGET
                </Typography>
                <Typography color="textPrimary" variant="h3">
                  $24,000
                </Typography>
              </Grid>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: red[600],
                    height: 56,
                    width: 56
                  }}
                >
                  <MoneyIcon />
                </Avatar>
              </Grid>
            </Grid>
            <Box
              sx={{
                pt: 2,
                display: "flex",
                alignItems: "center"
              }}
            >
              <ArrowDownwardIcon sx={{ color: red[900] }} />
              <Typography
                sx={{
                  color: red[900],
                  mr: 1
                }}
                variant="body2"
              >
                12%
              </Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AccountCards;
