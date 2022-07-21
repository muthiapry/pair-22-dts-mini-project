import { Box } from '@mui/material';
import NowPlayingMovie from '../components/NowPlayingMovie';
import PopularMovie from '../components/PopularMovie';
import TopRatedMovie from '../components/TopRatedMovie';
import UpcomingMovie from '../components/UpcomingMovie';
import { useParams } from 'react-router-dom';
import RecomendationMovie from '../components/RecomendationMovie';
import SimiliarMovie from '../components/SimiliarMovie';
import DetailCard from '../components/DetailCard';

const MovieDetail = () => {
    let params = useParams();

    return (
        <Box>
            <DetailCard id_movie={params.id}></DetailCard>
            <RecomendationMovie id_movie={params.id}></RecomendationMovie>
            <SimiliarMovie id_movie={params.id}></SimiliarMovie>
            <NowPlayingMovie/>
            <TopRatedMovie/>
            <PopularMovie/>
            <UpcomingMovie/>
        </Box>
    );
}

export default MovieDetail;
