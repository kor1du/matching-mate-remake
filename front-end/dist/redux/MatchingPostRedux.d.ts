import { Position } from "../matchingPost/components/GetMap";
export declare const setPosition: (position: Position) => {
    type: "matchingpost/SETPOSITION";
    payload: Position;
};
declare type MatchingPostAction = ReturnType<typeof setPosition>;
declare type MatchingPostState = {
    position: Position;
};
declare function categoryRedux(state: MatchingPostState | undefined, action: MatchingPostAction): MatchingPostState;
export default categoryRedux;
