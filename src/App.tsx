import React from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/redusers/UserSlice";

const App = () => {

    const {error, isLoading, users, count} = useAppSelector(state => state.userReduser)

    const {increment} = userSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(10))}>+1</button>
        </div>
    );
};

export default App;