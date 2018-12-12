import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSelectFilter } from "../../actions/index";

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
              <li
                key={index}
                onClick={() =>
                  toggleSelectFilter({
                    subCategoryName: i.name,
                    categoryName: category.name
                  })
                }
              >
                {i.name} - {String(i.selected)}
              </li>
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
