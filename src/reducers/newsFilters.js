import { combineReducers } from "redux";
import { TOGGLE_SELECT_FILTER } from "../actions";

// Initial state
const initialState = {
  categories: {
    World: {
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
    Local: {
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
  }
};
//Selectors
const normalizeFilters = filters => [
  ...Object.keys(filters).map(key =>
    Object.assign({}, { name: key }, filters[key])
  )
];
// Reducer itself
export default function newsFilters(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SELECT_FILTER:
      const { categoryName, subCategoryName } = action.payload;
      const categories = [...state.categories].map(category => {
        if (category.name === categoryName) {
          category.subCategories.map(filter => {
            if (filter.name === subCategoryName) {
              filter.selected = !filter.selected;
            }
            return filter;
          });
        }
        return category;
      });
      return Object.assign({}, state, categories);
    default:
      return Object.assign({}, state, {
        categories: normalizeFilters(state.categories)
      });
  }
}
