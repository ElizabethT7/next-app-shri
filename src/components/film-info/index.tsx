import classnames from 'classnames';
import { FunctionComponent } from 'react';
import styles from './styles.module.css';

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
      <p className={`${styles.title} ${styles.active}`}>
        {title || 'Unknown Film'}
      </p>
      {Boolean(genre) && <p>{genre}</p>}
      <p className={classnames(styles.title, styles.active)}>
        {seasonsCount > 0 ? `Кол-во ${seasonsCount}` : 'Нет'}
      </p>
    </>
  );
};