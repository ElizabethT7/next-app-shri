import { useReducer } from 'react';

const FORM_ACTIONS = {
  setName: "setName",
  setText: "setText",
  setRating: "setRating",
};

const reducer = (state: any, action: any) => {

  /*switch (action.type) {
    case 'Do_SOMETHING':
      //...
      return {...}
    default: 
      return state;
  }*/

  /*const actions = {
    type: 'Do_SOMETHING',
    payload: {}
  }*/

  switch (action.type) {
    case FORM_ACTIONS.setName:
      return {
        name: action.payload.name,
        text: '',
        rating: 0
      };
    case FORM_ACTIONS.setText:
      return {
        ...state,
        text: action.payload.text
      };
    case FORM_ACTIONS.setRating:
      return {
        ...state,
        rating: action.payload.rating
      };
    default:
      return state;
  }
};

const initialState = {
  name: 'Elizabeth',
  text: 'text',
  rating: 10,
}



export const NewReviewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onNameChange = (event: React.FocusEvent<HTMLInputElement>) => dispatch(
    {type: FORM_ACTIONS.setName, payload: {name: event.target.value}}
  )

  return (
    <div>
      <label>
        Name:
        <input
          value={state.name}
          onChange={onNameChange}
          type='text'
         />
      </label>
      <label>
        Text:
        <input type='text' />
      </label>
      <label>
        Rating:
        <input type='number' />
      </label>
    </div>
  );
}