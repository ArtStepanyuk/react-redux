import PropTypes from "prop-types";
import React, { Component } from "react";
import Item from "../../containers/news/item";

class Category extends Component {
  render() {
    const { classes, data, toggleSelectFilter } = this.props;

    return (
      <div className={classes.root}>
        {/*<Typography variant="h4" className={classes.title}>*/}
          {/*{category.name}*/}
        {/*</Typography>*/}
        <ul className={classes.title}>
          {data.map((i, index) => {
            return (
              <Item
                key={index}
                data={i}
                onToggle={toggleSelectFilter}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Category;
