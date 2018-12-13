import { SELECT_WORLD_CATEGORY, SELECT_LOCAL_CATEGORY } from '../constants';

const initialState = {
    selectedWorldCategory: [],
    selectedLocalCategory: [],
    categories: [
        {
            name: "Ukraine",
            type: "world",
            id: 1,
        },
        {
            name: "Japan",
            type: "world",
            id: 2,
        },
        {
            name: "Stuff",
            type: "local",
            id: 3,
        },
        {
            name: "MoreStuff",
            type: "local",
            id: 4,
        },
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_WORLD_CATEGORY: {
            const { payload: { id: selectedId }} = action;
            const categorySelected = state.selectedWorldCategory.includes(selectedId);
            console.log(categorySelected);
            return {
                ...state,
                selectedWorldCategory: categorySelected ? state.selectedWorldCategory.filter(
                    id => id !== selectedId
                ) : [...state.selectedWorldCategory, selectedId]
            };
        }

        case SELECT_LOCAL_CATEGORY: {
            const { payload: { id: selectedId }} = action;
            const categorySelected = state.selectedLocalCategory.includes(selectedId);

            return {
                ...state,
                selectedLocalCategory: categorySelected ? state.selectedLocalCategory.filter(
                    id => id !== selectedId
                ) : [...state.selectedLocalCategory, selectedId]
            };
        }

        default:
            return state;
    }
}
