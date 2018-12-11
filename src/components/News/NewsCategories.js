import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsCategory from "./NewsCategory";

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    paddingBottom: "5px"
  },
  label: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: "white",
    fontWeight: 700
  }
});

class NewsCategories extends Component {
  state = {
    categories: [
      {
        name: "World",
        visible: true,
        subCategories: [
          {
            name: "Ukraine",
            selected: false
          },
          {
            name: "Japan",
            selected: false
          }
        ]
      },
      {
        name: "Local",
        visible: true,
        subCategories: [
          {
            name: "Stuff",
            selected: false
          },
          {
            name: "MoreStuff",
            selected: false
          }
        ]
      }
    ]
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24} className={classes.root}>
        {this.state.categories.map((item, index) => (
          <NewsCategory category={item} key={index} />
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles)(NewsCategories);
