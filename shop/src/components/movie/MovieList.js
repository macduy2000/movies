import React from 'react';
import MovieCard from './MovieCard';
import {Swiper,SwiperSlide} from 'swiper/react';
import "swiper/scss";
import useSWR from "swr";
 import { fetcher }  from "../../config";
//https://api.themoviedb.org/3/movie/now_playing?api_key=5923328aedfb92feb90b00ea862e1abf
const MovieList = () => {
//API key: 5923328aedfb92feb90b00ea862e1abf
    const { data, error } = useSWR('https://api.themoviedb.org/3/movie/550?api_key=5923328aedfb92feb90b00ea862e1abf', fetcher);
    console.log("MovieList ~ data", data);

    return (
        
        <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>

      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
      <SwiperSlide>
      <MovieCard></MovieCard> 
      </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default MovieList;