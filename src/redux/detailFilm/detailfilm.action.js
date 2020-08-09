import {DETAIL_FILM,IDENTIFIANT_DETAIL_FILM} from './detailfilm.types'
import API from '../../service/api'


export const getFilm=()=>{
return async (dispatch)=>{
    const id=695596;
    const response=await API.get(`movie/${id}?api_key=59d73d300b5c7045284b10d150d60b82`);
    const data=[]
        data.push({
            id:response.data.id,
            popularity:response.data.popularity,
            vote_count:response.data.vote_count,
            poster_path:response.data.poster_path,
            backdrop_path:response.data.backdrop_path,
            original_title:response.data.original_title,
            title:response.data.title,
            vote_average:response.data.vote_average,
            overview:response.data.overview
        })

    dispatch(
        {
        type:DETAIL_FILM,
        payload:data
        },
        {
            type:IDENTIFIANT_DETAIL_FILM,
            payload:id,   
        }
    )
}
}