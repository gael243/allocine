import {SET_FILMS} from './listefilm.types';

const INITIAL_STATE={
    films:[],
    loadind:true
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_FILMS :
            return{...state,films:action.payload,loadind:false};    
        default :
            return state;
    }
}