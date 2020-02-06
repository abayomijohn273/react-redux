import React, {useState, useLayoutEffect, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Posts from './components/Posts';
import AddPost from './components/AddPost';
const App = () => {
  
  return(
    <>
      <AddPost/>
      <Posts/>
    </>
  )
}
export default App
