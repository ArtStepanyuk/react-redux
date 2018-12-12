import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewsCategory from "./NewsCategory";
import { connect } from "react-redux";

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

const mapStateToProps = state => {
  return {
    categories: state.newsFilters.categories.slice()
  };
};

class NewsCategories extends Component {
  render() {
    const { classes, categories } = this.props;
    const drawNewsCategory = () => {
      return (
        categories.length > 0 &&
        categories.map((item, index) => (
          <NewsCategory category={item} key={index} />
        ))
      );
    };
    return (
      <Grid container spacing={24} className={classes.root}>
        {drawNewsCategory()}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NewsCategories));
