/*
 * action types
 */

 //actions types
export const TOGGLE_SELECT_FILTER = 'TOGGLE_SELECT_FILTER'


/*
 * action creators
 */

export function toggleSelectFilter(selected) {
  return { type: TOGGLE_SELECT_FILTER, selected }
}