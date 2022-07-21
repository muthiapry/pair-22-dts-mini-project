import { Box, Typography } from '@mui/material';
import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const NowPlayingMovie = () => {
    let navigate = useNavigate();

    const onClickMovie = (id) => {
        navigate(`/detail/${id}`);
        window.scrollTo(0, 0)
    }

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("movie/now_playing");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{margin: 10}}>
            <Typography variant="h6" gutterBottom component="div">
                Now Playing
            </Typography>
            <div className="container">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={3}
                    navigation={true}
                    modules={[Grid, Navigation]}
                    breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                        },
                        "@0.75": {
                          slidesPerView: 3,
                        },
                        "@1.00": {
                          slidesPerView: 4,
                        },
                        "@1.50": {
                          slidesPerView: 5,
                        },
                      }}
                    className="mySwiper"
                >
                    {
                        movies.map(movie => (
                            <SwiperSlide id={movie.id}>
                                <div
                                    className="imageContainer"
                                    onClick={() => onClickMovie(movie.id)}
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
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Box>  
    );
}

export default NowPlayingMovie;