import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import WorldCategory from "../../containers/news/world-category";
import LocalCategory from "../../containers/news/local-category";

class News extends Component {
  render() {
    const { classes, worldCategories, localCategories } = this.props;

    return (
      <Grid container spacing={24} className={classes.root}>
          <WorldCategory data={worldCategories} />
          <LocalCategory data={localCategories} />
      </Grid>
    );
  }
}

export default News;
