import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case DELETE_TODO:{
      const { id } = action.payload
        const allIds = [ ...state.allIds ]
        allIds.splice(allIds.indexOf(id), 1)
        let byIds = Object.assign({}, state.byIds)
        delete byIds[id]
        return {
          ...state,
          allIds: allIds,
          byIds: byIds
        }
  };
    default:
      return state;
  }
}
export default todos;