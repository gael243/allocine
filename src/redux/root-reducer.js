import {combineReducers} from 'redux';
import listFilm from './listeFilm/listefilm.reducer';
import detailFilm from './detailFilm/detailfilm.reducer';
import filtreFilm from './listeFilm/filtrefilm.reducer';
import rangeFilm from './listeFilm/rangefilm.reducer';
import categorie from './categorie/categorie.reducer';

const rootReducer=combineReducers({
    films:listFilm,
    film:detailFilm,
    filmFiltre:filtreFilm, 
    rangeFilm:rangeFilm,
    categorie:categorie
})

export default rootReducer;