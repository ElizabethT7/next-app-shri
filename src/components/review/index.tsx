import { FunctionComponent } from 'react';

interface Props {
    author: string;
    text: string;
    rating: string;
}

/*const filmRating = useMemo(() => {
  return Math.floor(
  filmDetails.reviews.reduce((sum, review) => {
  return sum + review.rating
  }, 0) / filmDetails.reviews.length
  )
 }, [filmDetails.reviews]);*/
  

export const Review: FunctionComponent<Props> = ({author, text, rating}) => {
  return (
    <div>
      <span>{author}</span>
      <span>{text}</span>
      <span>{rating}</span>
    </div>
  )
}