import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import { connect } from "react-redux";
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

const mapStateToProps = state => {
  return {
    categories: state.newsFilters.categories.slice()
  };
};

class NewsCategories extends Component {
  render() {
    const { classes, categories } = this.props;
    const drawNewsCategory = () => {
      return categories.map((item, index) => (
        <NewsCategory category={item} key={item.name} />
      ));
    };
    return (
      <Grid container spacing={24} className={classes.root}>
        {drawNewsCategory()}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(withStyles(styles)(NewsCategories));
