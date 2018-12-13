import { SELECT_WORLD_CATEGORY, SELECT_LOCAL_CATEGORY } from '../constants';

export function selectWorldCategory(id) {
  return { type: SELECT_WORLD_CATEGORY, payload: { id }};
}

export function selectLocalCategory(id) {
    return { type: SELECT_LOCAL_CATEGORY, payload: { id }};
}
