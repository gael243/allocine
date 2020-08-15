import React from 'react';
import Home from './pages/home';
import DetailFilm from './components/detailfilm';
import ListeFilmAction from './pages/filmAction';
import ListeFilmDrame from './pages/filmDrame';
import ListeFilmComedie from './pages/filmComedie';
import ListeFilmAmour from './pages/filmAmour'
import store from './redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <div >
          <BrowserRouter>
          <Header/>
                <switch>
                      <Route exact path='/action' component={ListeFilmAction}/>
                      <Route exact path='/drame' component={ListeFilmDrame}/>
                      <Route exact path='/comedie' component={ListeFilmComedie}/>
                      <Route exact path='/amour' component={ListeFilmAmour}/>
                      <Route exact path='/' component={Home}/>
                      <Route exact path='/detailfilm/:id' component={DetailFilm}/>
                </switch>
            {/* <Footer/> */}
          </BrowserRouter>
 
        </div>
    </Provider>
  );
}

export default App;
