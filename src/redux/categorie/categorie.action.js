import {CATEGORIE_FILM} from './categorie.types';
import API from '../../service/api';


export const getCategorie=()=>{
return async (dispatch)=>{
    const response=await API.get(`genre/movie/list?api_key=59d73d300b5c7045284b10d150d60b82`);
    const data=[];
    for(const element of response.data.genres){
        data.push({
            genres:element.name
        }
        )
    }
    console.log(response.data);
    dispatch(
        {
        type:CATEGORIE_FILM,
        payload:data
        }
    )
}
}