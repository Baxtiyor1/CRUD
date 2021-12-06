import Users from "./components/users/users";
import Post from "./components/post/post";
import Update from "./components/update/Update";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import LogIn from './components/Login/Login';
import  Private  from "./Routes/private";
import  Public  from "./Routes/public";

import { Route, Routes } from "react-router";


//SASS
import './App.scss'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Private />}>
          <Route path='/posts' element={<Post />} />
          <Route path='/update' element={<Update />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/' element={<Users />} />
        </Route>
        <Route path='/' element={<Public />}>
          <Route path='/login' element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
