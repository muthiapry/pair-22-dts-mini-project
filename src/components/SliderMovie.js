import { Box, Typography, Card, CardContent, CardMedia, Rating } from '@mui/material';
import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";
import { useNavigate } from 'react-router-dom';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const SliderMovie = () => {
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
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {
                        movies.map(movie => (
                            <SwiperSlide id={movie.id}>
                                <Card button onClick={() => onClickMovie(movie.id)} id={movie.id} sx={{ display: 'flex', maxHeight: 400, cursor: 'pointer' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 2/4, justifyContent: 'center', alignItems: 'center' }}>
                                        <CardContent sx={{ flex: '1 0 auto', mt: 2, padding: 7 }}>
                                            <Typography component="div" variant="h3">
                                                {movie.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {new Date(movie.release_date).getFullYear()}
                                            </Typography>
                                            <Box
                                                sx={{
                                                width: 200,
                                                display: 'flex',
                                                alignItems: 'center',
                                                }}
                                            >
                                                <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
                                                <Box sx={{ ml: 2 }}>{movie.vote_average}</Box>
                                            </Box>
                                            <Typography variant="subtitle1" gutterBottom component="div">
                                                {movie.overview}
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                    <CardMedia
                                        component="img"
                                        sx={{ maxWidth: 2/4 }}
                                        image={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
                                        alt="Movie poster"
                                    />
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Box>  
    );
}

export default SliderMovie;