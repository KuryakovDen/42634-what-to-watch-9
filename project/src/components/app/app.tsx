import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../../screens/main-screen/main-screen';
import SignInScreen from '../../screens/sign-in-screen/sign-in-screen';
import FilmScreen from '../../screens/film-screen/film-screen';
import FavouriteFilmsScreen from '../../screens/favourite-films-screen/favourite-films-screen';
import ReviewScreen from '../../screens/review-screen/review-screen';
import PlayerScreen from '../../screens/player-screen/player-screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen title={'Title'} genre={'drama'} releaseDate={2020} />} />
        <Route path={AppRoute.SignIn} element={<SignInScreen />} />
        <Route path={AppRoute.Film} element={<FilmScreen />} />
        <Route path={AppRoute.MyList} element={<FavouriteFilmsScreen />} />
        <Route path={AppRoute.Review} element={<ReviewScreen />} />
        <Route path={AppRoute.Player} element={<PlayerScreen />} />
        <Route path={'*'} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
