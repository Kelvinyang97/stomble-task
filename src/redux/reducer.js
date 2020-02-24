import { ADD_TODO, REMOVE_TODO } from "./actionTypes";

const initialState = {
  itemList: {}
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      console.log('here in reducer')
      console.log(action.payload)
      const { id, content } = action.payload;
      return {
        ...state,
        itemList: {
          ...state.itemList,
          [id]: content
        }
      };
    }
    case REMOVE_TODO: {
      console.log('here in reducer removing')
      console.log(action.payload)
      const { id } = action.payload;
      let res = Object.assign({}, state.itemList)
      delete res[id]

      return {
        ...state,
        itemList: {
          ...res
        }
      };

    }
    default:
      return state;
  }
}
