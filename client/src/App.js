import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/pages/Home';
import AboutMe from './component/pages/About_me';
import Recipes from './component/pages/Recipes';
import Blog from './component/pages/Blog';

import Individual_Recipe from './component/pages/recipes/a';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';



function App() {
  /* this is used to connect api to react front end, by fetching whatever is displayed in 3001/api to jere*/
  /*const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  });*/

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/About_me" element={<AboutMe />}></Route>
          <Route exact path = "/Recipes" element={<Recipes />}></Route>
          <Route exact path = "/recipes/a" element={<Individual_Recipe />}></Route>
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