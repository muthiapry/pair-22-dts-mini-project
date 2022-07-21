import { Box } from '@mui/material';
import NowPlayingMovie from '../components/NowPlayingMovie';
import PopularMovie from '../components/PopularMovie';
import SliderMovie from '../components/SliderMovie';
import TopRatedMovie from '../components/TopRatedMovie';
import UpcomingMovie from '../components/UpcomingMovie';
import WeekTrendingMovie from '../components/WeekTrendingMovie';

const MovieList = () => {
    return (
        <Box>
            <SliderMovie/>
            <NowPlayingMovie/>
            <PopularMovie/>
            <TopRatedMovie/>
            <UpcomingMovie/>
            <WeekTrendingMovie/>
        </Box>
    );
}

export default MovieList;
