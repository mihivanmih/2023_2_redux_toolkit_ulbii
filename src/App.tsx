import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/redusers/UserSlice";
import {fetchUsers} from "./store/redusers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from './components/PostContainer2';

const App = () => {

   //  const {error, isLoading, users, count} = useAppSelector(state => state.userReduser)
   //
   // // const {increment} = userSlice.actions
   //  const dispatch = useAppDispatch()
   //
   //  useEffect(() => {
   //      dispatch(fetchUsers())
   //  }, []);


    return (
        <div>
            {/*<h1>{count}</h1>*/}
            {/*/!*<button onClick={() => dispatch(increment(10))}>+1</button>*!/*/}
            {/*{isLoading && <div>Загрузка...</div>}*/}
            {/*{error && <div>Ошибка!</div>}*/}
            {/*{JSON.stringify(users, null, 2)}*/}

            <PostContainer />
            {/*<PostContainer2 />*/}
        </div>
    );
};

export default App;