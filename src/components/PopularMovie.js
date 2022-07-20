import { Box } from '@mui/material';
import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const PopularMovie = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("movie/popular");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{margin: 10}}>
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={3}
                    navigation={true}
                    modules={[Grid, Navigation]}
                    className="mySwiper"
                >
                    {
                        movies.map(movie => (
                            <SwiperSlide id={movie.id}>
                                <div
                                    className="imageContainer"
                                    // onClick={() => imageOnClickHandler(movie.id)}
                                    >
                                    {movie.backdrop_path ? (
                                        <img
                                        src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
                                        alt="poster"
                                        className="slide-img"
                                        />
                                    ) : (
                                        <img
                                        src={process.env.PUBLIC_URL + "/img/movie_logo.png"}
                                        alt="poster"
                                        className="slide-img"
                                        />
                                    )}
                                    <div className="imgTitle">{movie.original_title}</div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Box>  
    );
}

export default PopularMovie;