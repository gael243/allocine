import {CATEGORIE_FILM} from './categorie.types';

const INITIAL_STATE={
    categorie:[],
    loadind:true
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CATEGORIE_FILM :
            return{...state,categorie:action.payload,loadind:false};  
        default :
            return state;
    }
}