import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import Recipes from './component/pages/Recipes';
import Blog from './component/pages/Blog';
import Recipe1 from './component/pages/recipes/a';
import Recipe2 from './component/pages/recipes/b';
import Recipe3 from './component/pages/recipes/c';
import Recipe4 from './component/pages/recipes/d';
import Recipe5 from './component/pages/recipes/e';
// import Recipe6 from './component/pages/recipes/f';
// import Recipe7 from './component/pages/recipes/g';
// import Recipe8 from './component/pages/recipes/h';
import Login from './component/pages/Login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';



function App() {
  /* this is used to connect api to react front end, by fetching whatever is displayed in 3001/api to jere*/

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/Recipes" element={<Recipes />}></Route>
          <Route exact path = "/Login" element={<Login />}></Route>
          <Route exact path = "/a" element={<Recipe1 />}></Route>
          <Route exact path = "/b" element={<Recipe2 />}></Route>
          <Route exact path = "/c" element={<Recipe3 />}></Route>
          <Route exact path = "/d" element={<Recipe4 />}></Route>
          <Route exact path = "/e" element={<Recipe5 />}></Route>
          {/* <Route exact path = "/f" element={<Recipe6 />}></Route>
          <Route exact path = "/g" element={<Recipe7 />}></Route>
          <Route exact path = "/h" element={<Recipe8 />}></Route> */}
          {/* Dynamic segment here, import Data file and then get .name for each page */}
          <Route exact path = "/Blog" element={<Blog />}></Route>
          <Route exact path = "/" element={<Home />}></Route>
          {/* <Route path='/Recipes' exact component={Recipes} /> */}
          {/* <Route path='/About_me' component = {About_me}/> */}
          {/* <Route path='/Email_recipe' exact component={Email_recipe} /> */}
          {/* <Route exact path='/' component = {Home}/> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;