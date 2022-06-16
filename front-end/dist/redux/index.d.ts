declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    categoryRedux: {
        category: string;
    };
}>, {
    type: "category/SETCATEGORYNAME";
    payload: string;
} | {
    type: "category?INITIALIZECATEGORYNAME";
}>;
export default rootReducer;
export declare type RootState = ReturnType<typeof rootReducer>;
