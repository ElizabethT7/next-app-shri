import React from 'react';
import { Films } from '@/components/films/Films';


export default function Home() {
  return (
    //react dom element 

    /*React.createElement('span', {
      children: '',
    })*/
    <>
      <div>Hello students!</div>
      <Films />
    </>
  );
}

    //react component
    /*
    class FirstComponent extends React.Component {
      //...
      render() {
        //...
      }
      //...
    }

    function FirstComponent() {
      //...
      return ...
    }

    const FirstComponent = () => {
      //...
      return ReactElement || null;
    }
    */ 
