import { FC } from 'react';

interface buttonTypes {
    txt:string;
    cls?:string;
}

const button:FC<buttonTypes> = (props) => {
  return (
    <button type="button" className={props.cls}>
      {props.txt}
    </button>
  );
};

export default button;
