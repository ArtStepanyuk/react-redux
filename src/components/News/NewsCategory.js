import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelectFilter } from "../../actions/index";
import NewsCategoryItem from "./NewsCategoryItem";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },

  title: {
    color: "white",
    paddingLeft: `40px`
  }
});

class NewsCategory extends Component {
  render() {
    const { classes, category, toggleSelectFilter } = this.props;

    return (
      <div className={classes.root}>
        test
        <Typography variant="h4" className={classes.title}>
          {category.name}
        </Typography>
        <ul className={classes.title}>
          {category.subCategories.map((i, index) => {
            return (
              <NewsCategoryItem
                key={index}
                subCategoryItem={{
                  categoryName: category.name,
                  subCategoryName: i.name,
                  ...i
                }}
                onToggle={toggleSelectFilter}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleSelectFilter: payload => dispatch(toggleSelectFilter(payload))
});

NewsCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(NewsCategory));
