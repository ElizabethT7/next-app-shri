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
          <ThemeContext.Provider value='dark'>
            <FilmDetails
              title={filmDetails.title}
              genre={filmDetails.genre}
              seasonsCount={filmDetails.seasonsCount}
            />
          </ThemeContext.Provider>
          <Reviews reviews={filmDetails.reviews}/>
          <Recommendations />
        <footer />
      </div>
    </ThemeContext.Provider>
  )
}
