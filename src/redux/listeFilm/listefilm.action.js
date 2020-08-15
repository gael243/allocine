import {SET_FILMS,SET_FILTRE,RANGE_FILM} from './listefilm.types'
import API from '../../service/api'

function getRange(total, total_pages, current_page) {
    let pages = [];

    if (total_pages > 10) {
        if (current_page < 5) {
            pages = [1, 2, 3, 4, 5, '...', total_pages];
        } else if  (current_page > total_pages - 5) {
            pages = [1, '...', total_pages - 4, total_pages - 3, total_pages - 2, total_pages - 1, total_pages];
        } else {
            pages = [
                1,'...', current_page - 1, current_page - 2, current_page, current_page + 1,
                current_page + 2, '...', total_pages
            ]
        }
    } else {
        pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }

    return {current: current_page, pages: pages, last_page: total_pages};
}

export const getFilms=(page)=>{
    console.log(`page ]]]]]${page}-----------`)
    return async (dispatch)=>{
        const url = page > 0 ? 
            `movie/popular?api_key=59d73d300b5c7045284b10d150d60b82&page=${page}` :
            `movie/popular?api_key=59d73d300b5c7045284b10d150d60b82`;
        const response=await API.get(url);
        const data=[]
        for(const element of response.data.results){
            data.push({
                id:element.id,
                popularity:element.popularity,
                vote_count:element.vote_count,
                poster_path:element.poster_path,
                backdrop_path:element.backdrop_path,
                original_title:element.original_title,
                title:element.title,
                release_date:element.release_date,
                vote_average:element.vote_average,
                overview:element.overview,
                page:response.data.total_pages
            })
        }

        dispatch({
            type:SET_FILMS,
            payload:data
        });

        dispatch({
            type:SET_FILTRE,
            payload:data
        });

        dispatch({type: RANGE_FILM, payload: getRange(
            response.data.total_results,
            response.data.total_pages,
            response.data.page
        )});
    }
}