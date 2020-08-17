import {SET_FILTRE} from './listefilm.types';

const INITIAL_STATE={
    filmFiltre:[],
    loadind:false
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SET_FILTRE :
            return{...state,filmFiltre:action.payload,loadind:true};    
        default :
            return state;
    }
}