import {RANGE_FILM} from './listefilm.types';

const INITIAL_STATE={
    range:{current: '0', pages: [], last_page: ''},
    loadind:true
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case RANGE_FILM :
            return{...state,range:action.payload,loadind:false};    
        default :
            return state;
    }
}