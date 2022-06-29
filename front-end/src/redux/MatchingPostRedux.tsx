import { Position } from "../matchingPost/components/GetMap";
import { Post } from "../matchingPost/components/GetPosts";

const SET_POSITION = "matchingpost/SETPOSITION" as const;

export const setPosition = (position: Position) => ({
  type: SET_POSITION,
  payload: position,
});

type MatchingPostAction = ReturnType<typeof setPosition>;

type MatchingPostState = {
  position: Position;
};

const initialState: MatchingPostState = {
  position: {
    lat: 0,
    lng: 0,
  },
};

function categoryRedux(state: MatchingPostState = initialState, action: MatchingPostAction): MatchingPostState {
  switch (action.type) {
    case SET_POSITION:
      return { position: action.payload };

    default:
      return state;
  }
}

export default categoryRedux;
