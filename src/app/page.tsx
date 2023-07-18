import filmDetails from '@/assets/data';
import { FilmDetails } from '@/components/film-details';
import { Reviews } from '@/components/reviews';

export default function Home() {
  return (
    <div>
      <header />
        <FilmDetails
          title={filmDetails.title}
          genre={filmDetails.genre}
          seasonsCount={filmDetails.seasonsCount}
        />
        <Reviews reviews={filmDetails.reviews}/>
        {/*<Recomendations />*/}
      <footer />
    </div>
  );
}
