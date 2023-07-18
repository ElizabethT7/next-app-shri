import { FunctionComponent } from 'react';

interface Props {
  title: string;
  genre: 'Comedy' | 'Horror' | string;
  seasonsCount: number;
}

export const FilmInfo: FunctionComponent<Props> = ({
  title,
  genre,
  seasonsCount
}) => {

  return (
    <>
      <p>
        {title || 'Unknown Film'}
      </p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>
        {seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нет'}
      </p>
    </>
  );
};