import { combineReducers } from "redux";
import { toggleSelectFilter, TOGGLE_SELECT_FILTER } from "../actions";

export default function newsFilters(state = [], action) {
  switch (action.type) {
    case TOGGLE_SELECT_FILTER:
      return state.map((filter, index) => {
        debugger;
        if (filter.name === action.name) {
          return Object.assign({}, filter, {
            selected: !filter.selected
          });
        }
        return filter;
      });
    default:
      return state;
  }
}
