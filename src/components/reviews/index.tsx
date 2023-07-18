import { FunctionComponent } from 'react';
import { Review } from '../review';

interface Props {
  reviews: any[
    /*{
      author: string;
      text: string;
      rating: string;
    }*/
  ]

}

/*const filmRating = useMemo(() => {
  return Math.floor(
  filmDetails.reviews.reduce((sum, review) => {
  return sum + review.rating
  }, 0) / filmDetails.reviews.length
  )
 }, [filmDetails.reviews]);*/
  

export const Reviews: FunctionComponent<Props> = ({reviews}) => {
  return (
    <div>
      {
        !!reviews.length && reviews.map((review) => (
          <Review 
            key={review.id}
            author={review.author}
            text={review.text}
            rating={review.rating}
          />
        ))
      }
    </div>
  )
}