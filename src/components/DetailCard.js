import * as React from 'react';
import tmdb from '../apis/tmdb';
import { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

const DetailCard = ({ id_movie }) => {
    const [movie, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get(`movie/${id_movie}`);
                setMovies(fetchedMovies.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, [id_movie]);

    return (
        <div>
            <div className="detail-movie-poster">
                <div className="detail-movie-poster-contain">
                    <h1>{`${movie.title ? movie.title : movie.name} (${(movie.release_date ? movie.release_date?.split("-")[0] : "Season "+movie.number_of_seasons)})`}</h1>
                    <div className="truncate">
                        <p>{movie.overview}</p>
                    </div>
                    <div className="button-group">
                        <button className="play-button">
                        <img src="/play-button.png" className="play-icon" alt="" />
                        <span
                            className="play-button-text"
                            style={{ paddingLeft: "15px" }}
                        >
                            Play
                        </span>
                        </button>
                        <button className="info-button">
                        <img
                            src="/more-information.png"
                            alt=""
                            className="info-icon"
                            style={{ width: "15px" }}
                        />
                        <span
                            className="info-button-text"
                            style={{ paddingLeft: "15px" }}
                        >
                            More Information
                        </span>
                        </button>
                    </div>
                </div>

                <img
                className="detail-movie-poster-image"
                src={`${BASE_IMAGE_URL}${movie.backdrop_path}`}
                alt=""
                />
            </div>
            <div className="detail-movie-description">
                <h3>Description</h3>
                <p>{movie.overview}</p>
            </div>
        </div> 
    );
}

export default DetailCard;