import filmDetails from '@/assets/data';
import { FilmDetails } from '@/components/film-details/FilmDetails';

export default function Home() {
  return (
    <div>
      <header />
        <FilmDetails
          title={filmDetails.title}
          genre={filmDetails.genre}
          seasonsCount={filmDetails.seasonsCount}
        />
        <Reviews />
        <Recomendations />
      <footer />
    </div>
  );
}
