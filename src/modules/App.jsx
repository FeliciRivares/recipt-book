import './App.css';
// import React from 'react';
// import style from './Recipe.module.css';
// import { RecipeItem } from './RecipeItem/RecipeItem';
import { Header } from './Header/Header';
import { Favorites } from './Favorites/Favorites';
import { NotFound } from './NotFound/NotFound';
import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from 'react-router-dom';
import { Recipe } from './Recipe/Recipe';

const App = () => {
  return (
    <section>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Recipe />} />
          <Route path="" element={<Recipe />} />
          <Route
            path="/favorites"
            element={
              <React.Suspense fallback={<>Please wait, loading</>}>
                <Favorites />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/favorite" element={<Favorites/>}/> */}
        {/* // <React.Suspense fallback={<>Please wait, loading</>} >
            //   <Favorites/>
            // </React.Suspense>} /> */}
        {/* </Routes> */}
      </div>
    </section>
  );
};

export default App;
