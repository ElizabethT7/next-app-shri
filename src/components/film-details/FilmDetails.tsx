import { useCount } from '@/hooks/useCount';
import { FunctionComponent, useState } from 'react';

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
  let /*state*/ [count, setCount] = useState(() => {return 0});
  //let { count, increment, decrement } = useCount(0);
  //let count = 0;
  /*useEffect(() => {
    console.log('count:', count);
  }, [count]);*/

  return (
    <div>
      <p>{title || 'Unknown Film'}</p>
      {Boolean(genre) && <p>{genre}</p>}
      <p>{seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нет'}</p>
      <div>
        <button onClick={() => {count = count - 1}}>-</button>
        {count}
        <button onClick={() => {count = count - 1}}>+</button>
      </div>
    </div>
  );
};