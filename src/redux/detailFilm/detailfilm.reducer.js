import {DETAIL_FILM,IDENTIFIANT_DETAIL_FILM} from './detailfilm.types';

const INITIAL_STATE={
    film:[],
    loadind:true
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DETAIL_FILM :
            return{...state,film:action.payload,loadind:false}; 
            case IDENTIFIANT_DETAIL_FILM :
                return{...state,film:action.payload,loadind:false};    
        default :
            return state;
    }
}