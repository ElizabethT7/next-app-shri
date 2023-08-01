import React from 'react';
import filmDetails from '@/assets/data';
import { FilmDetails } from '@/components/film-details';
import { Reviews } from '@/components/reviews';

const ThemeContext = React.createContext(/*initialValue*/);

export function FilmPage() {
  return (
    <ThemeContext.Provider value='default'>
      <div>
        <header />
          <FilmDetails
            title={filmDetails.title}
            genre={filmDetails.genre}
            seasonsCount={filmDetails.seasonsCount}
          />
          <Reviews reviews={filmDetails.reviews}/>
          <Recommendations />
        <footer />
      </div>
    </ThemeContext.Provider>
  )
}
