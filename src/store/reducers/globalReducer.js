import data from "../../data.json";

const initState = {
  allMemes: data,
};

export const memReducer = (state = initState, action) => {
  switch (action.type) {
    case "UP-VOTE": {
      const updatedMemes = state.allMemes.map((meme) =>
        meme.id === action.payload
          ? { ...meme, upvotes: meme.upvotes + 1 }
          : meme
      );
      return { ...state, allMemes: updatedMemes };
    }
    case "DOWN-VOTE": {
      const updatedMemes = state.allMemes.map((meme) =>
        meme.id === action.payload
          ? { ...meme, downvotes: meme.downvotes - 1 }
          : meme
      );
      return { ...state, allMemes: updatedMemes };
    }
    case "ADD-MEME": {
        
        return {
            allMemes: [ ...state.allMemes, action.payload ]
        } 
      }
    default:
      return state;
  }
};
