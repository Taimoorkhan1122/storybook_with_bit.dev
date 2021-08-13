export declare const store: import("@reduxjs/toolkit").EnhancedStore<{

    tasksList: {

        tasks: {

            id: string;

            title: string;

            state: import("../taskSlice").TaskState;

            updatedAt: string;

        }[];

    };

}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{

    tasksList: {

        tasks: {

            id: string;

            title: string;

            state: import("../taskSlice").TaskState;

            updatedAt: string;

        }[];

    };

}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{

    tasksList: {

        tasks: {

            id: string;

            title: string;

            state: import("../taskSlice").TaskState;

            updatedAt: string;

        }[];

    };

}, import("redux").AnyAction, undefined>]>;

export declare type RootState = ReturnType<typeof store.getState>;

export declare type AppDispatch = typeof store.dispatch;

