'use client';

import { FunctionComponent } from 'react';
import { useCount } from '@/hooks/use-count';
import { FilmInfo } from '../film-info';

interface Props {
  title: string;
  genre: 'Comedy' | 'Horror' | string;
  seasonsCount: number;
}

export const FilmDetails: FunctionComponent<Props> = ({
  title,
  genre,
  seasonsCount
}) => {
  let { count, increment, decrement } = useCount(0);

  return (
    <div>
      <FilmInfo 
      title={title}
      genre={genre}
      seasonsCount={seasonsCount}
      />
      <div>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};