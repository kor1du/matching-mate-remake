declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    CategoryRedux: {
        category: string;
    };
    MatchinPostRedux: {
        position: import("../matchingPost/components/GetMap").Position;
    };
}>, ({
    type: "category/SETCATEGORYNAME";
    payload: string;
} | {
    type: "category?INITIALIZECATEGORYNAME";
}) | {
    type: "matchingpost/SETPOSITION";
    payload: import("../matchingPost/components/GetMap").Position;
}>;
export default rootReducer;
export declare type RootState = ReturnType<typeof rootReducer>;
